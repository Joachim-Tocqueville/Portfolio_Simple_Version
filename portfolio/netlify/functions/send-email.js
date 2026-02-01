export const handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    try {
        const { nom, email, message } = JSON.parse(event.body);

        if (!nom || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Tous les champs (nom, email, message) sont requis.' }),
            };
        }

        const resendApiKey = process.env.RESEND_API_KEY;

        if (!resendApiKey) {
            console.error('RESEND_API_KEY is not defined');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Erreur de configuration serveur (Clé API manquante).' }),
            };
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Portfolio <onboarding@resend.dev>',
                to: 'joachim.tocqueville@gmail.com',
                reply_to: email,
                subject: `Nouveau message de ${nom} via mon portfolio`,
                html: `
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Resend API error:', data);
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Erreur lors de l\'envoi du mail via Resend.' }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email envoyé avec succès !' }),
        };

    } catch (error) {
        console.error('Internal server error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur interne du serveur.' }),
        };
    }
};

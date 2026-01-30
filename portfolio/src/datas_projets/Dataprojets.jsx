import React from 'react';
import imgACF2L from '../assets/imgs/ACF2L.webp';
import imgACF2Lmaquettes from '../assets/imgs/ACF2L_maquettes.webp';
import imgTechMyBro from '../assets/imgs/Tech_my_bro.webp';
import imgWebdoc from '../assets/imgs/Page_accueil_webdoc_sans_affiches.webp';
import imgWebdocAffiches from '../assets/imgs/Page_accueil_webdoc_avec_affiches.webp';
import imgMagazine from '../assets/imgs/Magazine.webp';
import imgPlancheTendance from '../assets/imgs/Planche_de_tendance.webp';
import imgSiteTouristique from '../assets/imgs/Site_touristique.webp';
import imgSushngo from '../assets/imgs/Sush\'n_go.webp';
import imgSushngoMaquettes from '../assets/imgs/Sush\'n_go_maquettes.webp';
import imgComète from '../assets/imgs/Théa_Comète.webp';
import imgSleepiest from '../assets/imgs/Sleepiest_maquettes.webp';
import imgTuga from '../assets/imgs/Tuga_maquettes.webp';
import pdfMagazine from '../assets/pdf/Magazine.pdf';
import pdfPlancheTendance from '../assets/pdf/Planche_de_tendance.pdf';
import vidéoComète from '../assets/vidéos/Théa_Comète.webm';

const dataProjets = [
    // Front
    {
        id: 1, // Utile pour le key dans .map()
        images: [imgACF2L, imgACF2Lmaquettes],
        image: imgACF2L,
        altImage: "ACF2L",
        titre: "ACF2L",
        description:
            "Cet exercice enrichissant portait sur la refonte du site web de l'aéroclub ACF2L.\
            De la recherche graphique, sur Figma, à l'intégration, en HTML, CSS et Bootstrap, j'ai pu mettre en pratique mes compétences en développement web et en design.",
        contexte:
            "Ce projet consistait en la refonte complète de l'identité visuelle du site web de l'aéroclub ACF2L.\
            L'objectif était de moderniser l'interface utilisateur pour la rendre plus attractive et intuitive, tout en respectant l'esprit de l'aéronautique.",
        logiciels_langages: (
            <>
                La phase de conception a débuté par une recherche graphique approfondie et plusieurs itérations de maquettes sur <b>Figma</b>, en mettant l'accent sur la hiérarchie et la qualité visuelle.
                L'intégration a ensuite été réalisée en <i>HTML</i>, <i>CSS</i> et <i>Bootstrap</i> pour garantir un site parfaitement responsive (adapté aux mobiles).
                Le code a été édité sur <b>Visual Studio Code</b> avec un suivi de version via <b>GitHub</b>.
            </>
        ),
        dates:
            "Ce projet a été réalisé en sprint intensif de 10 jours (septembre 2025), en parallèle d'autres obligations académiques.",
        difficultes:
            "La complexité majeure résidait dans l'intégration d'un overlay en fondu spécifique :\
            il fallait assombrir l'arrière-plan tout en laissant un 'cercle de clarté' sur l'avion.\
            J'ai résolu ce problème en superposant un background:linear-gradient() pour le fondu et un masque, avec clamp() et background-image:url(), pour l'avion.",
        categorie: "Front",
        rôle: "Développeur frontend et webdesigner",
        liens: {
            site: "https://sunny-starlight-5b7c49.netlify.app",
            code: "https://github.com/BouquetEthan/ACF2L",
            maquettes: "https://www.figma.com/design/4azAUMbl7HO3hfm9dmvNH3/ACF2L?node-id=0-1&t=y3pPPQehgW0qrPqe-1",
        },
        style: {
            accueil: {
                imageFit: "contain",
                backgroundColor: "linear-gradient(to bottom, #013148, #19222d)"
            },
            projets: {
                imageFit: "contain",
                backgroundColor: "linear-gradient(to bottom, #013148, #19222d)"
            },
            modal: {
                imageFit: "fill",
                backgroundColor: "linear-gradient(to bottom, #013148, #19222d)"
            }
        }
    },
    {
        id: 2,
        images: [imgWebdoc, imgWebdocAffiches],
        image: imgWebdoc,
        altImage: "Webdoc",
        titre: "Webdoc",
        contexte:
            "Cette SAE (projet universitaire) consistait à créer un webdocumentaire sur le thème de notre choix.\
            Avec mon équipe, nous avons choisi le thème de la musique indépendante.\
            Notre but était de créer un site web permettant aux visiteurs de découvrir et comprendre différents aspects de la musique indépendante, en particulier les coulisses de la création musicale et des concerts.\
            Le tout à travers des articles, images, audios et interviews que nous avons réalisés nous-mêmes (à part quelques images).",
        logiciels_langages: (
            <>
                Pour ce très grand projet, j'ai utilisé mes compétences en :
                <ul>
                    <li>- Audiovisuel (tournage, prise et traitement de sons et d'images),</li>
                    <li>- Développement web (<i>HTML</i>, <i>CSS</i>, <i>SCSS</i>, <i>JS</i>, <br /> <b>Visual Studio Code</b>, <b>GitHub</b>),</li>
                    <li>- Design (<b>Figma</b>),</li>
                    <li>- Rédaction (articles, interviews).</li>
                </ul>
            </>
        ),
        dates:
            "Ce projet a duré environ 2 mois et demi (de mi-septembre à fin novembre 2025), en parallèle d'autres obligations académiques.",
        difficultes:
            "Nous avons eu des difficultés à commencer le projet, à cause de tournages tardifs.\
            De plus, j'ai rencontré certaines difficultés lors de la création du design de ma page car je n'arrivais pas à trouver un design attrayant.\
            Mais aussi durant la rédaction de mon article parce que je manquais d'inspiration au début et que je n'arrivais pas à trouver les bonnes tournures de phrases.\
            Cependant, j'ai réussi à surmonter ces difficultés en cherchant des inspirations sur internet.",
        categorie: "Front",
        rôle: "Développeur frontend, caméraman, designer et rédacteur",
        liens: {
            site: "https://broad-violet-aa6e.b-raphaelmail.workers.dev/",
            code: "https://github.com/RaphouCode/Site_Webdoc",
            maquettes: "https://www.figma.com/design/xSlvnOZtBc7C7pePMprJTj/SAE-302-webdoc?node-id=0-1&t=wyP3XoQc5BL8cuVB-1",
        },
        style: {
            projets: {
                imageFit: "fill",
                backgroundColor: "#000000"
            },
            modal: {
                imageFit: "fill",
                backgroundColor: "#000000"
            }
        }
    },
    {
        id: 3,
        image: imgSiteTouristique,
        altImage: "Site touristique",
        titre: "Site touristique",
        contexte:
            "Cette SAE (projet universitaire) consistait à créer un site web qui permettrait aux visiteurs de découvrir différents sites touristiques à travers le monde.",
        logiciels_langages: (
            <>
                Malgré un manque de conception, l'intégration a été réalisée en <i>HTML</i>, <i>CSS</i> et <i>JS</i> pour créer un site vitrine simple et dynamique.
                Le code a été édité sur <b>Visual Studio Code</b> avec un suivi de version via <b>GitHub</b>.
            </>
        ),
        dates:
            "Ce projet a duré environ 1 mois (de mi-novembre à mi-décembre 2025), en parallèle d'autres obligations académiques.",
        difficultes:
            "Les deux principaux défis résidaient dans l'ajout de vidéos et de cartes.\
            J'ai résolu ces problèmes en utilisant des balises iframe et des liens vidéo et Google Maps.",
        categorie: "Front",
        rôle: "Développeur frontend",
        liens: {
            site: "https://celebrated-praline-4f31eb.netlify.app",
            code: "https://github.com/gregwargamer/sae105",
        },
        style: {
            projets: {
                imageFit: "contain",
                backgroundColor: "linear-gradient(to bottom, #00008b, #c0e6fb)"
            },
            modal: {
                imageFit: "fill",
                backgroundColor: "linear-gradient(to bottom, #00008b, #c0e6fb)"
            }
        }
    },
    // Fullstack
    {
        id: 4,
        images: [imgSushngo, imgSushngoMaquettes],
        image: imgSushngo,
        altImage: "Sush'n go",
        titre: "Sush'n go",
        description:
            "Ce grand projet, très instructif, est un site de commande de boxes de sushis pour une entreprise fictive, Sush'n Go.\
            Durant son développement, j'ai endossé plusieurs rôles (designer et développeur fullstack).\
            J'ai notamment utilisé Figma pour les maquettes, Angular et TypeScript pour le frontend et PHP et MySQL pour le backend, ainsi qu'une API qui a joué le rôle crucial de passerelle entre ces deux parties.",
        contexte:
            "Cette SAE (projet universitaire) est un site de commande de boxes de sushis pour une entreprise fictive, Sush'n Go.\
            Notre but était de créer un site web qui permettrait aux clients de commander des boxes de sushis en ligne.\
            La subtilité est que l'utilisateur doit se connecter ou s'inscrire avant de pouvoir ajouter des produits au panier et passer commande.",
        logiciels_langages: (
            <>
                Tout d'abord, la phase de conception a débuté par une recherche graphique inspirante et quelques itérations de maquettes sur <b>Figma</b>, en mettant l'accent sur la hiérarchie et la qualité visuelle.
                Ensuite, l'intégration a été réalisée en deux parties :
                <ul>
                    <li>- La partie front en <i>HTML</i>, <i>Tailwind CSS</i>, <i>SCSS</i>, <i>Typescript</i> et <i>Chart.js</i> avec le framework <i>AngularJS</i>. Le tout pour garantir un site entièrement responsive et visuellement attrayant.</li>
                    <li>- La partie back en <i>PHP</i> avec une base de données sur <i>MySQL</i>. Ce qui nous a permis d'assurer le bon fonctionnement du site et de garantir la sécurité des données.</li>
                </ul>
                Précision importante : nous avons utilisé un <i>API</i> pour garantir la sécurité des données.
                Enfin, le code a été édité sur <b>Visual Studio Code</b> avec un suivi de version via <b>GitHub</b>.
            </>
        ),
        dates:
            "Ce projet a duré environ 2 mois et 2 semaines (de fin octobre 2025 à début janvier 2026), en parallèle d'autres obligations académiques.",
        difficultes:
            "Les difficultés rencontrées ont été multiples, mais les principales concernaient l'API et ses échanges avec Angular et avec la base de données.\
            J'ai résolu ces problèmes en comprenant le fonctionnement de l'API, de ses échanges avec Angular et avec la base de données.\
            Mais aussi en transformant les données envoyées par Angular pour les transmettre correctement à l'API et, par conséquent, à la base de données.",
        categorie: "Fullstack",
        rôle: "Développeur fullstack et designer",
        liens: {
            code: "https://github.com/MLoks77/SAE301-303",
            maquettes: "https://www.figma.com/design/lO5ttQLNWRnKHoDOm80Z1a/MAQUETTE-SUSHI?node-id=0-1&t=aVqeKquwqhV4mAaC-1",
        },
        style: {
            accueil: {
                imageFit: "contain",
                backgroundColor: "#999999"
            },
            projets: {
                imageFit: "contain",
                backgroundColor: "#999999"
            },
            modal: {
                imageFit: "fill",
                backgroundColor: "#999999"
            }
        }
    },
    // Design
    {
        id: 5,
        image: imgTechMyBro,
        altImage: "Tech my bro",
        titre: "Tech my bro",
        description:
            "Ma première pochette musicale professionnelle, réalisée par moi-même et pour moi-même, sur Photoshop.\
            De la recherche d'éléments clés tels que les images, couleurs et polices, à la création de la pochette, j'ai travaillé dur et avec passion pour fournir un résultat complet et de qualité.",
        contexte:
            "Voici un de mes projets personnels, il consistait en la création d'une pochette pour la musique 'Tech my bro' de Spadrag (mon nom d'artiste).\
            Pour cela, il a fallu imaginer un design qui allait bien avec la DA de ma musique ainsi que ma propre direction artistique.\
            J'avais tout de suite pensé à un design futuriste avec une tête de robot parce que c'est de la techno.\
            Ensuite, le choix des couleurs fut assez simple, mais j'ai mis un certain temps à trouver des polices qui correspondaient exactement à ce que je voulais.\
            Enfin, j'ai cherché un fond attrayant tout en restant dans la même DA.",
        logiciels_langages: (
            <>
                J'ai utilisé <b>Google</b> et <b>Youtube</b> pour mes recherches, notamment en ce qui concerne les normes pour ce genre de cover.
                Mais je me suis également servi de <b>Photoshop</b> pour l'assemblage et la modification des différents éléments (ombrage, colorisation...), notamment la tête de robot.
            </>
        ),
        dates:
            "J'ai réalisé ce projet sur deux jours, fin octobre 2025.",
        difficultes:
            "La seule difficulté que j'ai rencontrée était la recherche des différents éléments, en particulier la tête de robot, le fond et les polices.",
        categorie: "Design",
        rôle: "Graphiste",
        liens: {
            resultat: imgTechMyBro
        },
        style: {
            accueil: {
                imageFit: "contain",
                backgroundColor: "#222324",
            },
            projets: {
                imageFit: "unset",
                backgroundColor: "#222324"
            },
            modal: {
                imageFit: "contain",
                backgroundColor: "transparent"
            }
        }
    },
    {
        id: 6,
        images: [imgMagazine, imgPlancheTendance],
        image: imgMagazine,
        altImage: "Magazine",
        titre: "Magazine",
        contexte: (
            <>
                Cette SAE (projet universitaire) avait pour objectif de créer un magazine sur le thème de notre choix.
                J'avais choisi le thème de la musique et de l'été, et plus particulièrement les festivals de musique électronique.<br />
                Elle s'est déroulée en trois parties :
                <ul>
                    <li>- La recherche d'éléments graphiques (personnage central, décor de fond et objets ou vêtements)</li>
                    <li>- La création du magazine (assemblage des éléments et ajout d'un titre et de faux textes)</li>
                    <li>- La mise en page du magazine (disposition des éléments et habillage du texte)</li>
                </ul>
            </>
        ),
        logiciels_langages: (
            <>
                J'ai donc commencé par chercher mes différents éléments sur internet.
                Puis, j'ai enlevé le fond de chaque élément sur <b>Photoshop</b>, et parfois changé leurs couleurs.
                Enfin, j'ai utilisé <b>InDesign</b> pour assembler mes éléments, ajouter du texte et mettre en page le magazine.
            </>
        ),
        dates:
            "J'ai réalisé ce magazine en 1 mois (de fin novembre à fin décembre 2024), en parallèle d'autres obligations académiques.",
        difficultes:
            "Les difficultés que j'ai rencontrées résidaient dans la mise en page et l'habillage du texte.",
        categorie: "Design",
        rôle: "Graphiste",
        liens: {
            resultat: {
                magazine: pdfMagazine,
                plancheTendance: pdfPlancheTendance
            }
        },
        style: {
            projets: {
                imageFit: "fill",
                backgroundColor: "#222324"
            },
            modal: {
                imageFit: "contain",
                backgroundColor: "transparent"
            }
        }
    },
    {
        id: 7,
        image: imgSleepiest,
        altImage: "Sleepiest",
        titre: "Sleepiest",
        contexte:
            "Cet exercice avait pour but de reproduire fidèlement un design existant.\
            Le choix du design était libre, alors j'ai cherché des designs inspirants sur Dribbble et j'ai opté pour un design épuré et \"nocturne\", celui de Sleepiest.",
        logiciels_langages: (
            <>
                Une fois le design choisi, j'ai utilisé <b>Figma</b> pour répliquer le mieux possible ce dernier.
                J'ai notamment utilisé des composants (boutons, dont un avec des variantes) et créer des styles réutilisables (taille de polices et couleurs).
            </>
        ),
        dates:
            "J'ai réalisé ce projet mi-mai 2025.",
        difficultes:
            "La seule difficulté que j'ai rencontrée était la gestion des tailles des éléments.",
        categorie: "Design",
        rôle: "Designer",
        liens: {
            maquettes: "https://www.figma.com/design/fjKiFVukXqMa016HpA7ONl/Sleepiest-frames?node-id=0-1&t=pp1iTNcgJ2s7l20g-1",
        },
        style: {
            projets: {
                imageFit: "contain",
                backgroundColor: "#1E1E1E"
            },
            modal: {
                imageFit: "contain",
                backgroundColor: "#1E1E1E"
            }
        }
    },
    {
        id: 8,
        image: imgTuga,
        altImage: "Tuga",
        titre: "Tuga",
        contexte:
            "Ce projet consistait en la création d'une marque de streetwear premium.\
            Mon équipe et moi avions décidé de nous inspirer du portugal.\
            Bien sûr, il y a toute une partie marketing mais ici, je vais me concentrer sur la partie design.",
        logiciels_langages: (
            <>
                Après la création de notre charte graphique, j'ai réalisé la page produits, sur <b>Figma</b>.
                J'ai également rédigé, sur <b>Canva</b>, un calendrier éditorial et cinq rubriques de contenus, dont deux générées par IA.
            </>
        ),
        dates:
            "Nous avons réalisé ce projet en 3 mois (de mi-septembre à mi-décembre 2025), en parallèle d'autres obligations académiques.",
        difficultes:
            "Les deux principaux défis que j'ai rencontrés concernaient le design de ma page ainsi que la rédaction des rubriques de contenus.\
            J'ai résolu le premier en m'inspirant sur des sites tels que Dribbble et le second en m'inspirant de celles que j'avais déjà pu réaliser pour un autre projet en marketing.",
        categorie: "Design",
        rôle: "Designer",
        liens: {
            maquettes: "https://www.figma.com/design/9h0wYToThAkLacXjzbkA4N/Tuga?node-id=0-1&t=ofZOtJZJaeNOQW4z-1",
        },
        style: {
            projets: {
                imageFit: "contain",
                backgroundColor: "#1E1E1E"
            },
            modal: {
                imageFit: "scale-down",
                backgroundColor: "#1E1E1E"
            }
        }
    },
    {
        id: 9,
        image: imgComète,
        vidéo: vidéoComète,
        altImage: "Animation de \"Comète\"",
        titre: "Animation de \"Comète\"",
        contexte: (
            <>
                Cet exercice avait pour objectif d'animer un poster, une affiche ou une cover d'album ou de film.
                Le choix du sujet et du support était libre et j'avais choisi la cover de l'album <i>"Comète"</i> de <i>Théa</i>.
            </>
        ),
        logiciels_langages: (
            <>
                J'ai d'abord commencé par isoler les différents éléments de la cover en créant des calques respectifs pour le ciel, les bâtiments et Théa sur <b>Photoshop</b>.
                Puis, j'ai importé tous les calques sur <b>After Effects</b> pour les animer.
                J'ai également ajouter un titre et lui ai appliquer un effet d'opacité.
                <i>Petite précision : Spadrag est mon nom d'artiste.</i>
            </>
        ),
        dates:
            "J'ai réalisé ce projet mi-décembre 2025.",
        difficultes:
            "Je n'ai rencontré aucune difficulté particulière, hormis peut-être le temps nécessaire pour faire les calques et réaliser l'animation.",
        categorie: "Design",
        rôle: "Graphiste",
        liens: {
            resultat: vidéoComète
        },
        style: {
            projets: {
                imageFit: "fill",
                backgroundColor: "#365988"
            },
            modal: {
                imageFit: "contain",
                backgroundColor: "transparent"
            }
        }
    },
];

export default dataProjets;
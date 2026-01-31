import GitHubLogo from './GitHubLogo.jsx';
import LinkedInLogo from './LinkedInLogo.jsx';
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès !' });
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || "Une erreur est survenue." });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({ type: 'error', message: "Impossible de joindre le serveur. Réessayez plus tard." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="grid gap-10 md:gap-15 mt-5 text-center text-[#EDF2F4] bg-linear-to-b from-[#251949] to-[#2D327D] pb-5">
      <div className="mx-6 md:mx-20 lg:mx-40 xl:mx-155">
        <div className="font-['PlusJakartaSans-Regular'] text-[1.5rem] md:text-[1.875rem]">Une idée de projet ? Discutons-en !</div>
        <hr className="border-t-3 border-[#EDF2F4]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 content-center gap-y-8 md:gap-y-0 text-center">
          <div className="h-15 mb-0 md:mb-8">
            <a href="https://github.com/Joachim-Tocqueville" target="_blank" rel="noopener noreferrer">
              <GitHubLogo className="w-10 h-10 inline md:ml-11 mr-4 md:mr-10" fill="#EDF2F4" />
              <span className="font-['PlusJakartaSans-Regular'] text-[1rem] md:text-[1.1rem] align-middle">Joachim-Tocqueville</span>
            </a>
          </div>
          <div className="h-15">
            <a href="tel:0784912084" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt className="w-10 h-10 inline mr-4 md:mr-10" />
              <span className="font-['PlusJakartaSans-Regular'] text-[1rem] md:text-[1.1rem] md:mr-30 align-middle">07.84.91.20.84</span>
            </a>
          </div>
          <div className="h-15">
            <a href="https://www.linkedin.com/in/joachim-tocqueville-1356b2339/" target="_blank" rel="noopener noreferrer">
              <LinkedInLogo className="w-10 h-10 inline mx-4 md:mx-10" />
              <span className="font-['PlusJakartaSans-Regular'] text-[1rem] md:text-[1.1rem] align-middle">Joachim Tocqueville</span>
            </a>
          </div>
          <div className="h-15">
            <a href="mailto:joachim.tocqueville@gmail.com" target="_blank" rel="noopener noreferrer">
              <IoMail className="w-11 h-11 inline ml-0 md:ml-5 mr-4 md:mr-10" />
              <span className="font-['PlusJakartaSans-Regular'] text-[1rem] md:text-[1.1rem] align-middle">joachim.tocqueville@gmail.com</span>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} onChange={handleChange} className="grid gap-5 px-6 md:px-12 lg:px-24 xl:px-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
            <input type="text" name="nom" value={formData.nom} placeholder="Votre nom" className="border-[#EDF2F4] border-3 outline-none p-2 w-full text-[1rem] md:text-[1.1rem]" required />
            <input type="email" name="email" value={formData.email} placeholder="Votre e-mail" className="border-[#EDF2F4] border-3 outline-none p-2 w-full text-[1rem] md:text-[1.1rem]" required />
          </div>
          <textarea name="message" value={formData.message} placeholder="Votre message" className="border-[#EDF2F4] border-3 outline-none p-2 h-40 align-top text-[1rem] md:text-[1.1rem]" required />
          <div className="flex flex-col items-center gap-4 w-full">
            {status.message && (
              <div className={`font-['PlusJakartaSans-Regular'] text-[1rem] ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </div>
            )}
            <button disabled={isSending} className={`border-[#EDF2F4] border-3 p-2 rounded-3xl cursor-pointer text-[1rem] md:text-[1.1rem] w-full sm:w-60 self-center transition-all ${isSending ? 'opacity-50 cursor-not-allowed bg-[#EDF2F4] text-[#251949]' : 'hover:bg-[#EDF2F4] hover:text-[#251949]'}`}>
              {isSending ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </form>
      </div>
      <div className="font-['PlusJakartaSans-Regular'] text-[0.9rem] md:text-[1.1rem] mb-2">© Joachim Tocqueville</div>
    </div>
  )
}

export default Footer;
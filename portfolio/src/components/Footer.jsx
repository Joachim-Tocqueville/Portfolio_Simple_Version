import GitHubLogo from './GitHubLogo.jsx';
import LinkedInLogo from './LinkedInLogo.jsx';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (
      <div className="grid gap-15 mt-5 text-center text-[#EDF2F4] bg-linear-to-b from-[#251949] to-[#2D327D]">
        <div className="mx-155">
          <div className="font-['PlusJakartaSans-Regular'] text-[1.875rem]">Une idée de projet ? Discutons-en !</div>
          <hr className="border-t-3 border-[#EDF2F4]"/>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 content-center">
            <div className="h-15 mb-8">
              <a href="https://github.com/Joachim-Tocqueville">
                <GitHubLogo className="w-10 h-10 inline ml-11 mr-10"/>
                <span className="font-['PlusJakartaSans-Regular'] text-[1.1rem] align-middle">Joachim-Tocqueville</span>
              </a>
            </div>
            <div className="h-15">
              <FaPhoneAlt className="w-10 h-10 inline mr-10"/>
              <span className="font-['PlusJakartaSans-Regular'] text-[1.1rem] mr-30 align-middle">07.84.91.20.84</span>
            </div>
            <div className="h-15">
              <a href="https://www.linkedin.com/in/joachim-tocqueville-1356b2339/">
                <LinkedInLogo className="w-10 h-10 inline mx-10"/>
                <span className="font-['PlusJakartaSans-Regular'] text-[1.1rem] align-middle">Joachim Tocqueville</span>
              </a>
            </div>
            <div className="h-15">
              <IoMail className="w-11 h-11 inline ml-5 mr-10"/>
              <span className="font-['PlusJakartaSans-Regular'] text-[1.1rem] align-middle">joachim.tocqueville@gmail.com</span>
            </div>
          </div>
          <div className="grid gap-5 px-50">
            <div className="grid grid-cols-2 gap-10">
              <input type="text" placeholder="Votre nom" className="border-[#EDF2F4] border-3 outline-none p-2 w-full text-[1.1rem]" required/>
              <input type="email" placeholder="Votre e-mail" className="border-[#EDF2F4] border-3 outline-none p-2 w-full text-[1.1rem]" required/>
            </div>
            <textarea placeholder="Votre message" className="border-[#EDF2F4] border-3 outline-none p-2 h-40 align-top text-[1.1rem]" required />
            <button className="border-[#EDF2F4] border-3 p-2 ml-50 rounded-3xl cursor-pointer text-[1.1rem]">Envoyer</button>
          </div>
        </div>
        <div className="font-['PlusJakartaSans-Regular'] text-[1.1rem] mb-2">© Joachim Tocqueville</div>
      </div>
    )
  }
  
  export default Footer;
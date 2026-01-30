import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-linear-to-b from-[#2D327D] to-[#251949] text-[#EDF2F4] py-4 px-6 md:px-12 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a className="font-['PressStart2P-Regular'] text-[0.9rem] md:text-[1.1rem]" href="/accueil">
          Joachim Tocqueville
        </a>

        <div className="hidden md:flex gap-12 lg:gap-24">
          <a className="font-['VT323-Regular'] text-[1.5rem]" href="/accueil">Accueil</a>
          <a className="font-['VT323-Regular'] text-[1.5rem]" href="/projets">Projets</a>
          <a className="font-['VT323-Regular'] text-[1.5rem]" href="/apropos">À propos</a>
        </div>

        <button className="md:hidden text-[#EDF2F4] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-[#251949] border-t border-[#2D327D] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 py-4 shadow-xl' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-6">
          <a className="font-['VT323-Regular'] text-[1.8rem]" href="/accueil" onClick={() => setIsOpen(false)}>Accueil</a>
          <a className="font-['VT323-Regular'] text-[1.8rem]" href="/projets" onClick={() => setIsOpen(false)}>Projets</a>
          <a className="font-['VT323-Regular'] text-[1.8rem]" href="/apropos" onClick={() => setIsOpen(false)}>À propos</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
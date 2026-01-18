function Navbar() {
    return (
      <div className="grid grid-cols-2 gap-100 py-3 text-center text-[#EDF2F4] items-center bg-linear-to-b from-[#2D327D] to-[#251949]">
        <a className="font-['PressStart2P-Regular'] text-[1.1rem]" href="/accueil">Joachim Tocqueville</a>
        <div className="grid grid-cols-3">
          <a className="font-['VT323-Regular'] text-[1.5rem]" href="/accueil">Accueil</a>
          <a className="font-['VT323-Regular'] text-[1.5rem]" href="/projets">Projets</a>
          <a className="font-['VT323-Regular'] text-[1.5rem]" href="/apropos">À propos</a>
        </div>
      </div>
    )
  }
  
export default Navbar;
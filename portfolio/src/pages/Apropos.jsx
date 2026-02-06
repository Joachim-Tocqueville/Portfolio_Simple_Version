import HtmlLogo from '../components/HtmlLogo';
import CssLogo from '../components/CssLogo';
import JSLogo from '../components/JSLogo';
import ReactLogo from '../components/ReactLogo';
import PhpLogo from '../components/PhpLogo';
import NodeJSLogo from '../components/NodeJSLogo';
import BootstrapLogo from '../components/BootstrapLogo';
import GitLogo from '../components/GitLogo';
import TypescriptLogo from '../components/TypescriptLogo';
import MysqlLogo from '../components/MysqlLogo';
import CSharpLogo from '../components/CSharpLogo';
import JavaLogo from '../components/JavaLogo';
import PythonLogo from '../components/PythonLogo';
import TailwindLogo from '../components/TailwindLogo';
import ScssLogo from '../components/ScssLogo';
import AngularLogo from '../components/AngularLogo';
import FigmaLogo from '../components/FigmaLogo';
import PremiereProLogo from '../components/PremiereProLogo';
import IllustratorLogo from '../components/IllustratorLogo';
import PhotoshopLogo from '../components/PhotoshopLogo';
import AfterEffectsLogo from '../components/AfterEffectsLogo';
import InDesignLogo from '../components/InDesignLogo';
import BlenderLogo from '../components/BlenderLogo';
import ViteLogo from '../components/ViteLogo';
import WordpressLogo from '../components/WordpressLogo';
import GitHubLogo from '../components/GitHubLogo';
import VisualStudioCodeLogo from '../components/VisualStudioCodeLogo';
import PostmanLogo from '../components/PostmanLogo';
import TrelloLogo from '../components/TrelloLogo';
import AcrobatLogo from '../components/AcrobatLogo';
import UnityLogo from '../components/UnityLogo';
import GitLabLogo from '../components/GitLabLogo';
import CanvaLogo from '../components/CanvaLogo';
import ChartJSLogo from '../components/ChartJSLogo';
import GoogleLogo from '../components/GoogleLogo';
import SplideJSLogo from '../components/SplideJSLogo';
import SymfonyLogo from '../components/SymfonyLogo';
import ExpressJSLogo from '../components/ExpressJSLogo';
import CerveauPixelise from '../assets/imgs/Cerveau_pixelisé.png';
import DestinBriseImg from '../assets/imgs/Destin_brisé.webp';
import CVDeveloppeur from '../assets/pdf/CV_Developpeur.pdf';
import CVDesigner from '../assets/pdf/CV_Designer.pdf';
import { useState, useEffect } from 'react';
import { Modal, Box, IconButton, Typography, Button, CardMedia } from '@mui/material';

function Apropos() {
  const [animate, setAnimate] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    const yearTimer = setTimeout(() => {
      setShowYear(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(yearTimer);
    };
  }, []);

  return (
    <div className="text-[#EDF2F4]">
      <div className="mt-10 md:mt-40 mr-4 md:px-10 max-w-7xl *mx-auto* relative group/v2">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] text-center mb-8 md:absolute md:mb-0 md:-top-10 md:left-50">Parcours :</h2>

        <div className="relative w-full flex flex-col md:block md:ml-40">
          <div className="absolute w-80 mx-auto md:w-96 lg:w-180 -top-60 md:-top-60 md:lg:-top-90 left-0.5 md:-left-auto md:right-auto md:-left-10 md:lg:-left-40 md:-ml-40 rotate-y-180 scale-110 z-10 pointer-events-none -mb-8 md:mb-0 flex justify-center md:block">
            <img className="w-full h-auto object-contain" src={CerveauPixelise} alt="Cerveau pixelisé" />
          </div>

          <div className="flex flex-col md:grid md:grid-cols-4 gap-0 w-full text-[#EDF2F4] font-['VT323-Regular'] pt-4 md:pt-24">
            <svg width="0" height="0" className="absolute" aria-hidden="true">
              <defs>
                <pattern id="pixelGridV2" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="timelinecolor">
                  <stop offset="0%" stopColor="#e74587" />
                  <stop offset="100%" stopColor="#e74587" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-row md:flex-col items-center justify-center md:justify-start w-full relative group pointer-events-none">
              <div className="order-3 md:order-0 w-1/3 md:w-full text-[1.5rem] md:h-32 md:flex md:items-end md:text-[2rem] lg:text-[2.2rem] justify-center md:text-center md:items-baseline! leading-none mb-0 md:mb-8 pl-4 md:pl-0 pointer-events-auto">Brevet</div>
              <div className="order-2 md:order-0 w-20 h-60 md:w-full md:h-17! lg:h-26 rotate-90 md:rotate-0 flex md:block justify-center items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all md:mt-0 pointer-events-auto">
                <a href="https://www.college-la-rochefoucauld77.fr" target="_blank" rel="noopener noreferrer" className="block w-60 h-16 md:w-full md:h-full group/link">
                  <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible w-44 md:w-full">
                    <defs>
                      <clipPath id="clipBrevet">
                        <rect x="0" y="0" width={animate ? 200 : 0} height="60" style={{ transition: 'width 1000ms ease-in-out' }} />
                      </clipPath>
                    </defs>
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="#201547" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#timelinecolor)" clipPath="url(#clipBrevet)" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#pixelGridV2)" pointerEvents="none" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="none" stroke="white" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-4 md:right-4 md:left-auto md:translate-x-0 md:translate-y-0 -rotate-90 md:rotate-0 pointer-events-none z-20 opacity-100 md:opacity-0 md:group-hover/link:opacity-100 transition-opacity">
                    <svg viewBox="0 0 10 12" className="w-7 h-7 md:w-8 md:h-8 fill-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" shapeRendering="crispEdges">
                      <style>{`
                        @keyframes pixel-click {
                          0%, 100% { transform: scale(1) translate(0, 0); }
                          50% { transform: scale(0.85) translate(2px, 2px); }
                        }
                        .pixel-hand-cursor {
                          animation: pixel-click 0.6s infinite ease-in-out;
                          transform-origin: center;
                        }
                      `}</style>
                      <g className="pixel-hand-cursor text-white fill-current">
                        <rect x="3" y="0" width="1" height="6" />
                        <rect x="4" y="2" width="1" height="5" />
                        <rect x="5" y="2" width="1" height="5" />
                        <rect x="6" y="3" width="1" height="4" />
                        <rect x="2" y="5" width="5" height="4" />
                        <rect x="1" y="5" width="1" height="2" />
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="order-1 md:order-0 w-1/3 md:w-full text-[1.5rem] md:text-[2.2rem] lg:text-[2.8rem] text-right md:text-center mt-0 md:mt-8 pr-4 md:pr-0 pointer-events-auto">2019</div>
            </div>

            <div className="flex flex-row md:flex-col items-center justify-center md:justify-start w-full relative group -mt-25.5 md:mt-0 pointer-events-none">
              <div className="order-3 md:order-0 w-1/3 md:w-full text-[1.5rem] md:h-32 md:flex md:items-end md:text-[2rem] lg:text-[2.2rem] justify-center md:text-center items-baseline! leading-none mb-0 md:mb-8 pl-4 md:pl-0 pointer-events-auto">
                <span className="flex flex-col md:flex-col items-center justify-center gap-1 md:gap-2">
                  <span className="flex items-center gap-2">
                    Bac STI2D<br className="hidden md:block" /> option SIN
                    {/* Ampoule visible uniquement sur desktop à côté du texte */}
                    <button onClick={() => setIsModalOpen(true)} className="hidden md:inline-block cursor-pointer bg-transparent border-none p-1 transition-transform hover:scale-110 group/bulb" aria-label="Découvrir le projet Destin Brisé">
                      <svg className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover/bulb:drop-shadow-[0_0_15px_rgba(255,255,255,1)] transition-all" viewBox="0 0 24 24" fill="currentColor">
                        <style>{`
                          @keyframes bulb-glow {
                            0%, 100% { opacity: 0.7; }
                            50% { opacity: 1; }
                          }
                          .bulb-icon {
                            animation: bulb-glow 2s ease-in-out infinite;
                          }
                        `}</style>
                        <g className="bulb-icon">
                          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                        </g>
                      </svg>
                    </button>
                  </span>
                  {/* Ampoule visible uniquement sur mobile sous le texte */}
                  <button onClick={() => setIsModalOpen(true)} className="md:hidden cursor-pointer bg-transparent border-none p-1 transition-transform hover:scale-110 active:scale-95 group/bulb" aria-label="Découvrir le projet Destin Brisé">
                    <svg className="w-7 h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" viewBox="0 0 24 24" fill="currentColor">
                      <g className="bulb-icon">
                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                      </g>
                    </svg>
                  </button>
                </span>
              </div>
              <div className="order-2 md:order-0 w-20 h-60 md:w-full md:h-17! lg:h-26 rotate-90 md:rotate-0 flex md:block justify-center items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all pointer-events-auto">
                <a href="https://www.larmand.fr" target="_blank" rel="noopener noreferrer" className="block w-60 h-16 md:w-full md:h-full group/link">
                  <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible w-24 md:w-full">
                    <defs>
                      <clipPath id="clipBac">
                        <rect x="0" y="0" width={animate ? 200 : 0} height="60" style={{ transition: 'width 1000ms ease-in-out', transitionDelay: '800ms' }} />
                      </clipPath>
                    </defs>
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="#201547" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#timelinecolor)" clipPath="url(#clipBac)" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#pixelGridV2)" pointerEvents="none" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="none" stroke="white" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-4 md:right-4 md:left-auto md:translate-x-0 md:translate-y-0 -rotate-90 md:rotate-0 pointer-events-none z-20 opacity-100 md:opacity-0 md:group-hover/link:opacity-100 transition-opacity">
                    <svg viewBox="0 0 10 12" className="w-7 h-7 md:w-8 md:h-8 fill-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" shapeRendering="crispEdges">
                      <g className="pixel-hand-cursor text-white fill-current">
                        <rect x="3" y="0" width="1" height="6" />
                        <rect x="4" y="2" width="1" height="5" />
                        <rect x="5" y="2" width="1" height="5" />
                        <rect x="6" y="3" width="1" height="4" />
                        <rect x="2" y="5" width="5" height="4" />
                        <rect x="1" y="5" width="1" height="2" />
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="order-1 md:order-0 w-1/3 md:w-full text-[1.5rem] md:text-[2.2rem] lg:text-[2.8rem] text-right md:text-center mt-0 md:mt-8 pr-4 md:pr-0 pointer-events-auto">2022</div>
            </div>

            <div className="flex flex-row md:flex-col h-100 items-center justify-center md:justify-start w-full relative group -mt-37.5 md:mt-0 pointer-events-none">
              <div className="order-3 md:order-0 w-1/3 md:w-full text-[1.5rem] md:h-32 md:flex md:items-end md:justify-center md:text-[2rem] lg:text-[2.2rem] justify-center md:text-center leading-tight mb-0 md:mb-8 pl-4 md:pl-0 pointer-events-auto">
                BUT MMI parcours<br />développement web et<br />dispositifs<br />interactifs
              </div>
              <div className="order-2 md:order-0 w-20 h-60 md:w-full md:h-17! lg:h-26 rotate-90 md:rotate-0 flex md:block justify-center items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all pointer-events-auto">
                <a href="https://iut.univ-gustave-eiffel.fr" target="_blank" rel="noopener noreferrer" className="block w-60 h-16 md:w-full md:h-full group/link">
                  <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible w-60 md:w-full">
                    <defs>
                      <clipPath id="clipMMI">
                        <rect x="0" y="0" width={animate ? 100 : 0} height="60" style={{ transition: 'width 1000ms ease-in-out', transitionDelay: '1600ms' }} />
                      </clipPath>
                    </defs>
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="#201547" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#timelinecolor)" clipPath="url(#clipMMI)" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#pixelGridV2)" pointerEvents="none" />
                    <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="none" stroke="white" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-4 md:right-4 md:left-auto md:translate-x-0 md:translate-y-0 -rotate-90 md:rotate-0 pointer-events-none z-20 opacity-100 md:opacity-0 md:group-hover/link:opacity-100 transition-opacity">
                    <svg viewBox="0 0 10 12" className="w-7 h-7 md:w-8 md:h-8 fill-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" shapeRendering="crispEdges">
                      <g className="pixel-hand-cursor text-white fill-current">
                        <rect x="3" y="0" width="1" height="6" />
                        <rect x="4" y="2" width="1" height="5" />
                        <rect x="5" y="2" width="1" height="5" />
                        <rect x="6" y="3" width="1" height="4" />
                        <rect x="2" y="5" width="5" height="4" />
                        <rect x="1" y="5" width="1" height="2" />
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="order-1 md:order-0 w-1/3 md:w-full text-[1.5rem] md:text-[2.2rem] lg:text-[2.8rem] text-center md:text-center mt-0 md:mt-8 pr-4 md:pr-0 pointer-events-auto">
                En cours <br />
                <span className={`transition-opacity duration-1000 whitespace-nowrap ${showYear ? 'opacity-100' : 'opacity-0'}`}>
                  (2ème année)
                </span>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center justify-center md:justify-start w-full relative group -mt-37.5 md:mt-0 pointer-events-none">
              <div className="order-3 md:order-0 w-1/3 md:w-full text-[1.5rem] md:h-32 md:flex md:items-end md:text-[2rem] lg:text-[2.2rem] justify-center md:text-center items-baseline! leading-none mb-0 md:mb-8 pl-4 md:pl-0 pointer-events-auto">Futur</div>
              <div className="order-2 md:order-0 w-20 h-60 md:w-full md:h-17! lg:h-26 rotate-90 md:rotate-0 flex md:block justify-center items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all pointer-events-auto">
                <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible w-24 md:w-full h-16 md:h-full">
                  <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="#201547" />
                  <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#pixelGridV2)" pointerEvents="none" />
                  <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="none" stroke="white" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="order-1 md:order-0 w-1/3 md:w-full text-[1.5rem] md:text-[2.2rem] lg:text-[2.8rem] text-right md:text-center mt-0 md:mt-8 pr-4 md:pr-0 pointer-events-auto">?</div>
            </div>
          </div>

          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} aria-labelledby="modal-destin-brise" className="flex items-center justify-center backdrop-blur-sm">
            <Box className="relative bg-[#251949] border-3 md:border-5 border-[#2D327D] w-[95%] md:w-[70%] max-h-[90%] overflow-y-auto p-4 md:p-8 text-[#EDF2F4] outline-none shadow-2xl">
              <IconButton onClick={() => setIsModalOpen(false)} className="absolute! top-2! right-2! md:top-5! md:right-4! text-[#EDF2F4]! hover:bg-white/10! z-10! rounded-none!">
                <svg viewBox="0 0 5 5" className="w-4! h-4! md:w-8! md:h-8! fill-current" shapeRendering="crispEdges">
                  <rect x="0" y="0" width="1" height="1" />
                  <rect x="4" y="0" width="1" height="1" />
                  <rect x="1" y="1" width="1" height="1" />
                  <rect x="3" y="1" width="1" height="1" />
                  <rect x="2" y="2" width="1" height="1" />
                  <rect x="1" y="3" width="1" height="1" />
                  <rect x="3" y="3" width="1" height="1" />
                  <rect x="0" y="4" width="1" height="1" />
                  <rect x="4" y="4" width="1" height="1" />
                </svg>
              </IconButton>

              <Typography id="modal-destin-brise" component="h2" variant="h3" className="text-center text-[1.3rem]! md:text-[2.5rem]! font-['KronaOne-Regular']! px-4 mt-5! mb-6! md:mb-15!">Destin Brisé</Typography>

              <div className="flex flex-col gap-6 md:gap-10 items-center">
                <div className="relative h-48 sm:h-64 md:h-88 lg:h-120 w-full flex flex-col rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
                  <div className="bg-white text-black font-['PlusJakartaSans-Regular'] text-sm md:text-xl py-2 md:py-3 px-3 md:px-4 w-full text-center z-20 shadow-md">
                    Développeur et sound designer
                  </div>
                  <div className="relative grow w-full h-full min-h-0">
                    <CardMedia component="img" image={DestinBriseImg} alt="Destin Brisé" className="w-full h-full absolute inset-0" style={{ objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="flex px-2 md:px-20 lg:px-40 text-center font-['PlusJakartaSans-Regular']">
                  <p className="text-gray-300 text-sm md:text-base">Durant mon année de terminale, j'ai participé à la création d'un jeu vidéo sur <b>RPG Maker MV</b>.<br /> <b><i>Destin brisé</i></b> raconte l'histoire d'une jeune fille qui se fait harceler à l'école et qui décide d'utiliser l'art pour leur échapper ainsi qu'à ses démons. C'est un jeu à choix multiples où chaque décision mène à une fin différente.</p>
                </div>

                <div className="flex justify-center mt-2 md:mt-4 mb-2">
                  <Button className="h-9 md:h-10 w-20 md:w-24 px-6 md:px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.8rem]! md:text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                    <a href="http://prophil.larmand.fr/wordpress/destin-brise/" target="_blank" rel="noopener noreferrer">Jouer</a>
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

      <div className="mx-4 md:mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Langages :</h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-12 gap-y-12 pb-4">
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <SplideJSLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <CssLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <HtmlLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <BootstrapLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <TailwindLogo className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <JSLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <ScssLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <ViteLogo className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <ReactLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <TypescriptLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <AngularLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <ChartJSLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <PythonLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <SymfonyLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <NodeJSLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <ExpressJSLogo className="w-12 h-12 md:w-16 md:h-16 fill-white" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <PhpLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <MysqlLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <JavaLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <CSharpLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Logiciels :</h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-12 gap-y-12 pb-4">
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <GoogleLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <TrelloLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <PremiereProLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <AfterEffectsLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <AcrobatLogo className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <IllustratorLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <PhotoshopLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <InDesignLogo className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <FigmaLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <BlenderLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <CanvaLogo className="w-12 h-13 md:w-16 md:h-16" />
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <GitLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <GitHubLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <GitLabLogo className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <UnityLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <PostmanLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20 justify-center items-center">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <WordpressLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <VisualStudioCodeLogo className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 md:my-30 flex flex-wrap gap-10 md:gap-40 justify-center">
        <a href={CVDeveloppeur} target="_blank" rel="noopener noreferrer" type="application/pdf">
          <button className="h-10 w-35 md:w-40 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer border-none">CV développeur</button>
        </a>
        <a href={CVDesigner} target="_blank" rel="noopener noreferrer" type="application/pdf">
          <button className="h-10 w-30 md:w-35 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer border-none">CV designer</button>
        </a>
      </div>
    </div>
  )
}

export default Apropos;
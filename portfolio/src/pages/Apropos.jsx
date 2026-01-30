import HtmlLogo from '../components/HtmlLogo';
import CssLogo from '../components/CssLogo';
import JsLogo from '../components/JsLogo';
import ReactLogo from '../components/ReactLogo';
import PhpLogo from '../components/PhpLogo';
import NodejsLogo from '../components/NodejsLogo';
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
import InDesignLogo from '../components/InDesign';
import BlenderLogo from '../components/BlenderLogo';
import ViteLogo from '../components/ViteLogo';
import WordpressLogo from '../components/WordpressLogo';
import GitHubLogo from '../components/GitHubLogo';
import VisualStudioCodeLogo from '../components/VisualStudioCodeLogo';
import PostmanLogo from '../components/PostmanLogo';
import TrelloLogo from '../components/TrelloLogo';
import AcrobatLogo from '../components/AcrobatLogo';
import UnityLogo from '../components/UnityLogo';
import GitlabLogo from '../components/GitlabLogo';
import CanvaLogo from '../components/CanvaLogo';
import ChartJsLogo from '../components/ChartJsLogo';
import GoogleLogo from '../components/GoogleLogo';
import SplideJsLogo from '../components/SplideJsLogo';
import CerveauPixelise from '../assets/imgs/Cerveau_pixelisé.png';
// import CVDeveloppeur from '../assets/pdf/CV_Developpeur.pdf';
import CVDesigner from '../assets/pdf/CV_Designer.pdf';

import { useState, useEffect } from 'react';

function Apropos() {
  const [animate, setAnimate] = useState(false);
  const [showYear, setShowYear] = useState(false);

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
      <div className="mt-40 px-10 max-w-7xl *mx-auto* relative group/v2">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] absolute -top-10 left-50">Parcours :</h2>

        <div className="relative w-full ml-[10rem]">
          <div className="absolute -top-60 lg:-top-90 -left-10 lg:-left-40 w-96 lg:w-[45rem] -ml-[10rem] rotate-y-180 z-10 pointer-events-none">
            <img className="w-full h-auto object-contain" src={CerveauPixelise} alt="Cerveau pixelisé" />
          </div>
          <div className="grid grid-cols-4 w-full text-[#EDF2F4] font-['VT323-Regular'] pt-24">
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

            <div className="flex flex-col items-center w-full relative group">
              <div className="h-32 flex items-end text-[2rem] lg:text-[2.2rem] text-center items-baseline! leading-none mb-8">Brevet</div>
              <div className="w-full h-17! lg:h-26 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all">
                <a href="https://www.college-la-rochefoucauld77.fr" target="_blank" rel="noopener noreferrer">
                  <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible">
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
                </a>
              </div>
              <div className="text-[2.2rem] lg:text-[2.8rem] mt-8">2019</div>
            </div>

            <div className="flex flex-col items-center w-full relative group">
              <div className="h-32 flex items-end text-[2rem] lg:text-[2.2rem] text-center items-baseline! leading-none mb-8">Bac STI2D<br />option SIN</div>
              <div className="w-full h-17! lg:h-26 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all">
                <a href="https://www.larmand.fr" target="_blank" rel="noopener noreferrer">
                  <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible">
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
                </a>
              </div>
              <div className="text-[2.2rem] lg:text-[2.8rem] mt-8">2022</div>
            </div>

            <div className="flex flex-col items-center w-full relative group">
              <div className="h-32 flex items-end justify-center text-[2rem]! lg:text-[2.2rem] text-center leading-tight mb-8 w-full">
                BUT MMI parcours<br />développement web<br />et dispositifs<br />interactifs
              </div>
              <div className="w-full h-17! lg:h-26 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all">
                <a href="https://iut.univ-gustave-eiffel.fr" target="_blank" rel="noopener noreferrer">
                  <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible">
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
                </a>
              </div>
              <div className="text-[2.2rem] lg:text-[2.8rem] mt-8">
                En cours <br />
                <span className={`transition-opacity duration-1000 ${showYear ? 'opacity-100' : 'opacity-0'}`}>
                  (2ème année)
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center w-full relative group">
              <div className="h-32 flex items-end text-[2rem] lg:text-[2.2rem] text-center items-baseline! leading-none mb-8">Futur</div>
              <div className="w-full h-17! lg:h-26 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all">
                <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" className="overflow-visible">
                  <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="#201547" />
                  <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="url(#pixelGridV2)" pointerEvents="none" />
                  <path d="M10,0 L190,0 L200,10 L200,50 L190,60 L10,60 L0,50 L0,10 Z" fill="none" stroke="white" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="text-[2.2rem] lg:text-[2.8rem] mt-8">?</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Langages :</h2>
        <div className="flex justify-center gap-5">
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <SplideJsLogo className="w-16 h-16" />
            </div>
            <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
              <CssLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <HtmlLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <BootstrapLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <TailwindLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <JsLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <ScssLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <ViteLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <ReactLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <TypescriptLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <AngularLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <ChartJsLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <PythonLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <NodejsLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <PhpLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <MysqlLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <JavaLogo className="w-16 h-16" />
            </div>
            <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
              <CSharpLogo className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Logiciels :</h2>
        <div className="flex justify-center gap-5">
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <GoogleLogo className="w-16 h-16" />
            </div>
            <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
              <TrelloLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <PremiereProLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <AfterEffectsLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <AcrobatLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <IllustratorLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <PhotoshopLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <InDesignLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <FigmaLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <BlenderLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <CanvaLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
              <GitLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(10deg)' }}>
              <GitHubLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <GitlabLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center" style={{ transform: 'rotate(10deg)' }}>
              <UnityLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-80deg)' }}>
              <PostmanLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
              <WordpressLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{ transform: 'rotate(-2deg)' }}>
              <VisualStudioCodeLogo className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-30 flex flex-col-2 gap-100 justify-center">
        {/* <a href={CVDeveloppeur} download="CV_Developpeur_Joachim_Tocqueville.pdf">
          <button className="h-10 w-40 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer">CV développeur</button>
        </a> */}
        <a href={CVDesigner} download="CV_Designer_Joachim_Tocqueville.pdf">
          <button className="h-10 w-40 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer">CV designer</button>
        </a>
        <a href={CVDesigner} download="CV_Designer_Joachim_Tocqueville.pdf">
          <button className="h-10 w-40 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer">CV designer</button>
        </a>
      </div>
    </div >
  )
}

export default Apropos;
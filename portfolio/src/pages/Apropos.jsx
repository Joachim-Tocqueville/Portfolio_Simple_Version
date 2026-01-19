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
import CerveauPixelise from '../assets/imgs/Cerveau_pixelisé.png';

function Apropos() {
  return (
    <div className="text-[#EDF2F4]">
      <div className="mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Parcours :</h2>
        <div className="relative flex items-center gap-4 py-8">
          {/* Icône cerveau pixelisé */}
          <div className="flex-shrink-0">
            <img 
              className="w-16 h-16" 
              src={CerveauPixelise} 
              alt="Cerveau pixelisé"
            />
          </div>
          
          {/* Timeline barre horizontale */}
          <div className="flex-1 relative">
            {/* Labels au-dessus de la barre */}
            <div className="absolute -top-8 left-0 right-0 flex mb-2">
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">Brevet</div>
              </div>
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">Bac STI2D option SIN</div>
              </div>
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">BUT MMI parcours développement web et dispositifs interactifs</div>
              </div>
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">Futur</div>
              </div>
            </div>
            
            {/* Barre blanche principale */}
            <div className="h-4 bg-white flex">
              {/* Segment 1 - Brevet */}
              <div className="flex-1 border-r-2 border-[#251949]"></div>
              {/* Segment 2 - Bac STI2D */}
              <div className="flex-1 border-r-2 border-[#251949]"></div>
              {/* Segment 3 - BUT MMI */}
              <div className="flex-1 border-r-2 border-[#251949]"></div>
              {/* Segment 4 - Futur */}
              <div className="flex-1"></div>
            </div>
            
            {/* Années/Statuts en dessous de la barre */}
            <div className="absolute top-6 left-0 right-0 flex mt-2">
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">2019</div>
              </div>
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">2022</div>
              </div>
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">En cours</div>
              </div>
              <div className="flex-1 text-center px-2">
                <div className="font-['VT323-Regular'] text-[1rem] text-[#EDF2F4]">?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Langages :</h2>
        <div className="flex justify-center gap-5">
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <CssLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <HtmlLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <BootstrapLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
              <TailwindLogo className="w-16 h-16" />
            </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <JsLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <ScssLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <ViteLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <ReactLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <TypescriptLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <AngularLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <PhpLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <MysqlLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <NodejsLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <PythonLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <JavaLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <CSharpLogo className="w-16 h-16" />
          </div>
        </div>
      </div>

      <div className="mx-50 mt-30">
        <h2 className="font-['KronaOne-Regular'] text-[1.2rem] mb-10 text-left">Logiciels :</h2>
        <div className="flex justify-center gap-5">
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <TrelloLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <PremiereProLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <AfterEffectsLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <AcrobatLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <IllustratorLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <PhotoshopLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <InDesignLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <FigmaLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <BlenderLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <UnityLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <GitLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <GitHubLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <GitlabLogo className="w-16 h-16" />
          </div>
          <div className="w-60 flex flex-wrap justify-center gap-20">
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(10deg)'}}>
              <PostmanLogo className="w-16 h-16" />
            </div>
            <div className="hover:scale-110 transition-transform cursor-pointer" style={{transform: 'rotate(-10deg)'}}>
              <VisualStudioCodeLogo className="w-16 h-16" />
            </div>
          </div>
          <div className="w-16 hover:scale-110 transition-transform cursor-pointer content-center">
            <WordpressLogo className="w-16 h-16" />
          </div>
        </div>
      </div>

      <div className="my-30 flex flex-col-2 gap-100 justify-center">
        <button className="h-10 w-40 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer">CV développeur</button>
        <button className="h-10 w-40 rounded-full bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616] font-['PlusJakartaSans-Regular'] cursor-pointer">CV designer</button>
      </div>
    </div>
  )
}

export default Apropos;
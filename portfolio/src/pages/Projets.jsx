import Card_projet from "../components/Card_projet";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Projets() {
  return (
    <>
        <h1 className="font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.5rem] mt-20 mb-5">Voici mes projets :</h1>
        <div className="font-['PlusJakartaSans-Regular'] text-[#EDF2F4] text-[1.1rem] mx-117">
            De chez moi à mon université, j'ai eu l'occasion de créer et/ou participer à différents projets.
            Des sites et des designs web et graphiques. Autant de projets que de compétences acquises (ou presque).
        </div>
        
        <div className="flex h-100 my-30 ">
          <div className="absolute pl-15 font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.2rem]">Front :</div>
          <IoIosArrowBack className="h-15 w-15 mr-8 self-center cursor-pointer fill-[#EDF2F4] shrink-0" />
          <div className="flex items-center gap-20">
            <Card_projet />
            <Card_projet />
            <Card_projet />
            <Card_projet />
            <Card_projet />
          </div>
          <IoIosArrowForward className="h-15 w-15 ml-8 self-center cursor-pointer fill-[#EDF2F4] shrink-0" />
        </div>
        
        <div className="flex h-100 my-30 ">
          <div className="absolute pl-15 font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.2rem]">Back :</div>
          <IoIosArrowBack className="h-15 w-15 mr-8 self-center cursor-pointer fill-[#EDF2F4] shrink-0" />
          <div className="flex items-center gap-20">
            <Card_projet />
            <Card_projet />
            <Card_projet />
            <Card_projet />
            <Card_projet />
          </div>
          <IoIosArrowForward className="h-15 w-15 ml-8 self-center cursor-pointer fill-[#EDF2F4] shrink-0" />
        </div>

        <div className="flex h-100 my-30 ">
          <div className="absolute pl-15 font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.2rem]">Design :</div>
          <IoIosArrowBack className="h-15 w-15 mr-8 self-center cursor-pointer fill-[#EDF2F4] shrink-0" />
          <div className="flex items-center gap-20">
            <Card_projet />
            <Card_projet />
            <Card_projet />
            <Card_projet />
            <Card_projet />
          </div>
          <IoIosArrowForward className="h-15 w-15 ml-8 self-center cursor-pointer fill-[#EDF2F4] shrink-0" />
        </div>
    </>
  )
}

export default Projets;
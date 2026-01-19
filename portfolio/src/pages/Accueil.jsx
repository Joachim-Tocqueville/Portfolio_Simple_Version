import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Accueil() {
  return (
    <>
        <h1 className="font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.5rem] mt-20 mb-5">Salut, je suis Joachim Tocqueville !</h1>
        <div className="font-['PlusJakartaSans-Regular'] text-[#EDF2F4] text-[1.1rem] mx-105">
            Je suis étudiant en 2ème année de BUT MMI à l'université Gustave Eiffel, à Meaux.
            Autant développeur web que designer graphique ou web, je suis à la recherche d'un stage dans le développement web ou les jeux vidéos.
            Passionné de musique et de jeux vidéos, je cherche sans arrêt à me surpasser, c'est pourquoi j'apprends en autodidacte.
        </div>
        
        <div className="flex items-center justify-between h-100 my-30 gap-10">
          <IoIosArrowBack className="h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0" />
          <Card className="grid grid-cols-2 h-100 grow bg-none! bg-transparent! text-[#EDF2F4]! border-none rounded-none! shadow-none! overflow-visible! transition-none! duration-0!">
            <Box className="h-100 w-full">
              <CardContent className="grid grid-rows-3 gap-35 p-4! h-100 items-center justify-items-center">
                <Typography component="div" variant="h4" className="font-['KronaOne-Regular']! text-[1.7rem]!">
                  Titre d'un projet
                </Typography>
                <Typography component="div" variant="h5" className="h-58 w-140 content-center font-['PlusJakartaSans-Regular']! text-[1.2rem]! overflow-hidden">
                  Description rapide du projet.
                </Typography>
                <Button className="h-9 w-40 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[1rem]! normal-case! font-['PlusJakartaSans-Regular']!">En savoir plus</Button>
              </CardContent>
            </Box>
            <Box className="h-100 w-full flex justify-center">
              <CardMedia component="img" image="" alt="Image projet" className="w-100! h-100 bg-[#EDF2F4] text-black text-[1.1rem]! rounded-2xl content-center shadow-lg" style={{boxShadow: '0 0 35px rgba(237, 242, 244, 0.6)'}}></CardMedia>
            </Box>
          </Card>
          <IoIosArrowForward className="h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0" />
        </div>
    </>
  )
}

export default Accueil;
import dataProjets from "../datas_projets/Dataprojets";
import { Box, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from 'react-router-dom';
import '@splidejs/react-splide/css/core';

function Accueil() {
  const navigate = useNavigate();

  const handleNavigate = (project) => {
    if (!project) return;
    navigate('/projets', { state: { projectToOpenId: project.id } });
  };

  const featuredProjects = [
    dataProjets.find(p => p.id === 1),
    dataProjets.find(p => p.id === 4),
    dataProjets.find(p => p.id === 5)
  ].filter(p => !!p);

  return (
    <>
      <h1 className="font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.5rem] mt-20 mb-5">Salut, je suis Joachim Tocqueville !</h1>
      <div className="font-['PlusJakartaSans-Regular'] text-[#EDF2F4] text-[1.1rem] mx-105">
        Je suis étudiant en 2ème année de BUT MMI à l'université Gustave Eiffel, à Meaux.
        Autant développeur web que designer graphique ou web, je suis à la recherche d'un stage dans le développement web ou les jeux vidéos.
        Passionné de musique et de jeux vidéos, je cherche sans arrêt à me surpasser, c'est pourquoi j'apprends en autodidacte.
      </div>

      <Splide hasTrack={false} options={{
        type: "loop",
        gap: '1rem',
        perPage: 1,
        arrows: true,
        pagination: false,
      }} className="h-100 my-30 text-white overflow-x-clip overflow-y-visible">
        <SplideTrack className="overflow-visible!">
          {featuredProjects.map((project, index) => (
            <SplideSlide key={project.id} className="grid grid-cols-2 h-100 m-0! bg-none! bg-transparent! text-[#EDF2F4]! border-none rounded-none! shadow-none! transition-none! duration-0!">
              <Box className="h-100 w-full">
                <CardContent className="grid grid-rows-3 gap-35 p-4! h-100 items-center justify-items-center">
                  <Typography component="div" variant="h4" className="font-['KronaOne-Regular']! text-[1.7rem]!">
                    {project.titre}
                  </Typography>
                  <Typography component="div" variant="h5" className="h-58 w-140 content-center font-['PlusJakartaSans-Regular']! text-[1.2rem]! overflow-hidden">
                    {project.description}
                  </Typography>
                  <Button onClick={() => handleNavigate(project)} className="h-9 w-40 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[1rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                    En savoir plus
                  </Button>
                </CardContent>
              </Box>
              <Box className="h-100 w-full flex justify-center">
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.altImage}
                  className={`w-100! h-100 ${project.style?.accueil?.imageFit === 'contain' ? 'object-contain!' : 'object-cover!'} bg-[#EDF2F4] text-black text-[1.1rem]! rounded-2xl content-center cursor-pointer shadow-lg`}
                  style={{
                    boxShadow: '0 0 35px rgba(237, 242, 244, 0.6)',
                    background: project.style?.accueil?.backgroundColor || '#EDF2F4'
                  }}
                  onClick={() => handleNavigate(project)}
                />
              </Box>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows w-full h-full absolute top-0 z-10 flex grow justify-between items-center pointer-events-none">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 top-5 left-0 z-10 pointer-events-auto" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 bottom-0 right-0 z-10 pointer-events-auto" />
        </div>
      </Splide>
    </>
  )
}

export default Accueil;
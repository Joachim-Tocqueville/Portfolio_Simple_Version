import DataProjets from "../datas_projets/Dataprojets";
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
    DataProjets.find(p => p.id === 1),
    DataProjets.find(p => p.id === 4),
    DataProjets.find(p => p.id === 5)
  ].filter(p => !!p);

  return (
    <>
      <h1 className="font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.2rem] md:text-[1.5rem] mt-10 md:mt-20 mb-5 px-4">Salut, je suis Joachim Tocqueville !</h1>
      <div className="font-['PlusJakartaSans-Regular'] text-[#EDF2F4] text-[1rem] md:text-[1.1rem] px-6 md:px-20 lg:px-40 xl:px-105">
        Je suis étudiant en 2ème année de BUT MMI à l'université Gustave Eiffel, à Meaux.
        Autant développeur web que graphiste et designer, je suis à la recherche d'un stage, de 8 à 12 semaines, dès le mois de mai 2026, dans le développement web ou les jeux vidéos.
        Passionné de musique et de jeux vidéos, je cherche sans arrêt à me surpasser, c'est pourquoi j'apprends en autodidacte.
      </div>

      <Splide hasTrack={false} options={{
        type: "loop",
        gap: '1rem',
        perPage: 1,
        arrows: true,
        pagination: false,
      }} className="h-auto md:h-100 my-10 md:my-30 text-white overflow-x-clip overflow-y-visible">
        <SplideTrack className="overflow-visible!">
          {featuredProjects.map((project, index) => (
            <SplideSlide key={project.id} className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-0 m-0! bg-none! bg-transparent! text-[#EDF2F4]! border-none rounded-none! shadow-none! transition-none! duration-0!">
              <Box className="w-full h-auto md:h-100 order-2 md:order-1">
                <CardContent className="flex flex-col md:grid md:grid-rows-3 gap-6 md:gap-35 p-4! h-full md:h-100 items-center justify-items-center">
                  <Typography component="div" variant="h4" className="font-['KronaOne-Regular']! text-[1.4rem] md:text-[1.7rem]! text-center">
                    {project.titre}
                  </Typography>
                  <Typography component="div" variant="h5" className="h-auto md:h-58 w-full md:w-140 content-center font-['PlusJakartaSans-Regular']! text-[1rem] md:text-[1.2rem]! overflow-hidden text-center md:text-left opacity-90">
                    {project.description}
                  </Typography>
                  <Button onClick={() => handleNavigate(project)} className="h-10 md:h-9 w-48 md:w-40 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[1rem]! normal-case! font-['PlusJakartaSans-Regular']! font-bold! md:font-normal!">
                    En savoir plus
                  </Button>
                </CardContent>
              </Box>
              <Box className="w-full h-auto md:h-100 flex justify-center order-1 md:order-2 px-4 md:px-0">
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.altImage}
                  className={`w-full max-w-[300px] md:max-w-none md:w-100! h-auto md:h-100 aspect-square md:aspect-auto ${project.style?.accueil?.imageFit === 'contain' ? 'object-contain!' : 'object-cover!'} bg-[#EDF2F4] text-black text-[1.1rem]! rounded-2xl content-center cursor-pointer shadow-lg`}
                  style={{
                    boxShadow: '0 0 35px rgba(237, 242, 244, 0.4)',
                    background: project.style?.accueil?.backgroundColor || '#EDF2F4'
                  }}
                  onClick={() => handleNavigate(project)}
                />
              </Box>
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows w-full h-full absolute top-0 z-10 hidden md:flex grow justify-between items-center pointer-events-none">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 top-5 left-0 z-10 pointer-events-auto" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 bottom-0 right-0 z-10 pointer-events-auto" />
        </div>
      </Splide>
    </>
  )
}

export default Accueil;
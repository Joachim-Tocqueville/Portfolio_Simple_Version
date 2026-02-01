import React from 'react';
import Card_projet from "../components/Card_projet";
import Modal_projet from "../components/Modal_projet";
import DataProjets from "../datas_projets/Dataprojets";
import { Box, Typography } from '@mui/material';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useLocation } from 'react-router-dom';
import '@splidejs/react-splide/css/core';

const splideStyles = `
  @media (min-width: 768px) {
    .splide-centered .splide__list {
      justify-content: center !important;
      padding-top: 1rem !important;
    }
  }
`;

function Projets() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.projectToOpenId) {
      const project = DataProjets.find(p => p.id === location.state.projectToOpenId);
      if (project) {
        setSelectedProject(project);
        setOpen(true);
      }
      window.history.replaceState({}, document.title)
    }
  }, [location]);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const frontProjets = DataProjets.filter((projet) => projet.categorie === "Front");
  const fullstackProjets = DataProjets.filter((projet) => projet.categorie === "Fullstack");
  const designProjets = DataProjets.filter((projet) => projet.categorie === "Design");

  return (
    <>
      <style>{splideStyles}</style>
      <h1 className="font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.2rem] md:text-[1.5rem] mt-10 md:mt-20 mb-5 px-4 md:px-0 text-center md:text-center">Voici mes projets :</h1>
      <div className="font-['PlusJakartaSans-Regular'] text-[#EDF2F4] text-[0.95rem] md:text-[1.1rem] px-6 md:mx-117 text-center md:text-center">
        De chez moi à mon université, j'ai eu l'occasion de créer et/ou participer à différents projets.
        Des sites et des designs web et graphiques. Autant de projets que de compétences acquises (ou presque).
      </div>

      <Box className="w-full relative mt-16 md:mt-25">
        <Typography component="h2" variant="h4" className="md:pl-10 font-['KronaOne-Regular']! text-[#EDF2F4] text-[1.5rem]! text-center md:text-[1.2rem]! md:text-left mb-4 md:mb-0 md:absolute">
          Front :
        </Typography>
      </Box>
      <Splide hasTrack={false} options={{
        type: 'slide',
        gap: '1rem',
        perPage: 5,
        perMove: 1,
        arrows: frontProjets.length > 5,
        drag: frontProjets.length > 1,
        pagination: false,
        breakpoints: {
          1280: { perPage: 4 },
          1024: { perPage: 3 },
          768: { perPage: 1, focus: 'center', arrows: frontProjets.length > 1 },
        }
      }} className="splide-centered h-auto md:h-100 mb-16 md:mb-25 text-white overflow-x-clip md:overflow-visible py-8 md:my-30 md:px-16">
        <SplideTrack className="md:overflow-visible!">
          {frontProjets.map((projet) => (
            <SplideSlide key={projet.id} className="flex justify-center items-center">
              <Card_projet dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </Splide>

      <Box className="w-full relative mt-8 md:mt-0">
        <Typography component="h2" variant="h4" className="md:pl-10 font-['KronaOne-Regular']! text-[#EDF2F4] text-[1.5rem]! text-center md:text-[1.2rem]! md:text-left mb-4 md:mb-0 md:absolute">
          Fullstack :
        </Typography>
      </Box>
      <Splide hasTrack={false} options={{
        type: 'slide',
        gap: '1rem',
        perPage: 5,
        perMove: 1,
        arrows: fullstackProjets.length > 5,
        drag: fullstackProjets.length > 1,
        pagination: false,
        breakpoints: {
          1280: { perPage: 4 },
          1024: { perPage: 3 },
          768: { perPage: 1, focus: 'center', arrows: fullstackProjets.length > 1 },
        }
      }} className="splide-centered h-auto md:h-100 mb-16 md:mb-25 text-white overflow-x-clip md:overflow-visible py-8 md:my-30 md:px-16">
        <SplideTrack className="md:overflow-visible!">
          {fullstackProjets.map((projet) => (
            <SplideSlide key={projet.id} className="flex justify-center items-center">
              <Card_projet dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </Splide>

      <Box className="w-full relative mt-8 md:mt-0">
        <Typography component="h2" variant="h4" className="md:pl-10 font-['KronaOne-Regular']! text-[#EDF2F4] text-[1.5rem]! text-center md:text-[1.2rem]! md:text-left mb-4 md:mb-0 md:absolute">
          Design :
        </Typography>
      </Box>
      <Splide hasTrack={false} options={{
        type: 'slide',
        gap: '1rem',
        perPage: 5,
        perMove: 1,
        arrows: designProjets.length > 5,
        drag: designProjets.length > 1,
        pagination: false,
        breakpoints: {
          1280: { perPage: 4 },
          1024: { perPage: 3 },
          768: { perPage: 1, focus: 'center', arrows: designProjets.length > 1 },
        }
      }} className="splide-centered h-auto md:h-100 mb-16 md:mb-25 text-white overflow-x-clip md:overflow-visible py-8 md:my-30 md:px-16">
        <SplideTrack className="md:overflow-visible!">
          {designProjets.map((projet) => (
            <SplideSlide key={projet.id} className="flex justify-center items-center">
              <Card_projet dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </Splide>

      <Modal_projet open={open} handleClose={handleClose} project={selectedProject} />
    </>
  )
}

export default Projets;
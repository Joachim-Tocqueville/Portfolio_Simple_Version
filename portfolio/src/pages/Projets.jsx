import React from 'react';
import Card_projet from "../components/Card_projet";
import Modal_projet from "../components/Modal_projet";
import dataProjets from "../datas_projets/Dataprojets";
import { Box, CardContent, Typography } from '@mui/material';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import { useLocation } from 'react-router-dom';

function Projets() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.projectToOpenId) {
      const project = dataProjets.find(p => p.id === location.state.projectToOpenId);
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

  const frontProjets = dataProjets.filter((projet) => projet.categorie === "Front");
  const fullstackProjets = dataProjets.filter((projet) => projet.categorie === "Fullstack");
  const designProjets = dataProjets.filter((projet) => projet.categorie === "Design");

  return (
    <>
      <h1 className="font-['KronaOne-Regular'] text-[#EDF2F4] text-[1.5rem] mt-20 mb-5">Voici mes projets :</h1>
      <div className="font-['PlusJakartaSans-Regular'] text-[#EDF2F4] text-[1.1rem] mx-117">
        De chez moi à mon université, j'ai eu l'occasion de créer et/ou participer à différents projets.
        Des sites et des designs web et graphiques. Autant de projets que de compétences acquises (ou presque).
      </div>

      <Box className="w-full relative mt-25">
        <CardContent className="">
          <Typography component="div" variant="h4" className="absolute pl-10 font-['KronaOne-Regular']! text-[#EDF2F4] text-[1.2rem]!">
            Front :
          </Typography>
        </CardContent>
      </Box>
      <Splide hasTrack={false} options={{
        type: (frontProjets.length > 5) ? "loop" : "slide",
        gap: '1rem',
        perPage: 1,
        arrows: (frontProjets.length > 5) ? true : false,
        drag: (frontProjets.length > 5) ? true : false,
        pagination: false,
      }} className="h-100 mb-25 text-white overflow-x-clip overflow-y-visible">
        <SplideTrack className="overflow-visible!">
          {(frontProjets.length > 0) && (<SplideSlide className="flex h-100 my-30">
            <Box className="w-full h-full flex gap-20 absolute items-center justify-center">
              {frontProjets.slice(0, 5).map((projet) => (
                <Card_projet key={projet.id} dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
              ))}
            </Box>
          </SplideSlide>)}
          {(frontProjets.length > 5) && (<SplideSlide className="flex h-100 my-30">
            <Box className="w-full h-full flex gap-20 absolute items-center justify-center">
              {frontProjets.slice(5, 10).map((projet) => (
                <Card_projet key={projet.id} dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
              ))}
            </Box>
          </SplideSlide>)}
        </SplideTrack>

        {(frontProjets.length > 5) && (<div className="splide__arrows w-full h-full absolute top-0 z-10 flex grow justify-between items-center pointer-events-none">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 top-5 left-0 z-10 pointer-events-auto" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 bottom-0 right-0 z-10 pointer-events-auto" />
        </div>)}
      </Splide>

      <Box className="w-full relative">
        <CardContent className="">
          <Typography component="div" variant="h4" className="absolute pl-10 font-['KronaOne-Regular']! text-[#EDF2F4] text-[1.2rem]!">
            Fullstack :
          </Typography>
        </CardContent>
      </Box>
      <Splide hasTrack={false} options={{
        type: (fullstackProjets.length > 5) ? "loop" : "slide",
        gap: '1rem',
        perPage: 1,
        arrows: (fullstackProjets.length > 5) ? true : false,
        drag: (fullstackProjets.length > 5) ? true : false,
        pagination: false,
      }} className="h-100 mb-25 text-white overflow-x-clip overflow-y-visible">
        <SplideTrack className="overflow-visible!">
          {(fullstackProjets.length > 0) && (<SplideSlide className="flex h-100 my-30">
            <Box className="w-full h-full flex gap-20 absolute items-center justify-center">
              {
                fullstackProjets.slice(0, 5).map((projet) => (
                  <Card_projet key={projet.id} dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
                ))
              }
            </Box>
          </SplideSlide>)}
          {(fullstackProjets.length > 5) && (<SplideSlide className="flex h-100 my-30">
            <Box className="w-full h-full flex gap-20 absolute items-center justify-center">
              {
                fullstackProjets.slice(5, 10).map((projet) => (
                  <Card_projet key={projet.id} dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
                ))
              }
            </Box>
          </SplideSlide>)}
        </SplideTrack>

        {(fullstackProjets.length > 5) && (<div className="splide__arrows w-full h-full absolute top-0 z-10 flex grow justify-between items-center pointer-events-none">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 top-5 left-0 z-10 pointer-events-auto" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 bottom-0 right-0 z-10 pointer-events-auto" />
        </div>)}
      </Splide>

      <Box className="w-full relative">
        <CardContent className="">
          <Typography component="div" variant="h4" className="absolute pl-10 font-['KronaOne-Regular']! text-[#EDF2F4] text-[1.2rem]!">
            Design :
          </Typography>
        </CardContent>
      </Box>
      <Splide hasTrack={false} options={{
        type: (designProjets.length > 5) ? "loop" : "slide",
        gap: '1rem',
        perPage: 1,
        arrows: (designProjets.length > 5) ? true : false,
        drag: (designProjets.length > 5) ? true : false,
        pagination: false,
      }} className="h-100 mb-25 text-white overflow-x-clip overflow-y-visible">
        <SplideTrack className="overflow-visible!">
          {(designProjets.length > 0) && (<SplideSlide className="flex h-100 my-30">
            <Box className="w-full h-full flex gap-20 absolute items-center justify-center">
              {
                designProjets.slice(0, 5).map((projet) => (
                  <Card_projet key={projet.id} dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
                ))
              }
            </Box>
          </SplideSlide>)}
          {(designProjets.length > 5) && (<SplideSlide className="flex h-100 my-30">
            <Box className="w-full h-full flex gap-20 absolute items-center justify-center">
              {
                designProjets.slice(5, 10).map((projet) => (
                  <Card_projet key={projet.id} dataProjets={projet} onClick={() => handleOpen(projet)} context="projets" />
                ))
              }
            </Box>
          </SplideSlide>)}
        </SplideTrack>

        {(designProjets.length > 5) && (<div className="splide__arrows w-full h-full absolute top-0 z-10 flex grow justify-between items-center pointer-events-none">
          <IoIosArrowBack className="splide__arrow splide__arrow--prev h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 top-5 left-0 z-10 pointer-events-auto" />
          <IoIosArrowForward className="splide__arrow splide__arrow--next h-15 w-15 cursor-pointer fill-[#EDF2F4] shrink-0 bottom-0 right-0 z-10 pointer-events-auto" />
        </div>)}
      </Splide>
      <Modal_projet open={open} handleClose={handleClose} project={selectedProject} />
    </>
  )
}

export default Projets;
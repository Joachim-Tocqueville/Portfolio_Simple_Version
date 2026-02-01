import { Modal, Box, Typography, Button, IconButton, CardMedia } from '@mui/material';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

function Modal_projet({ open, handleClose, project }) {
    if (!project) return null;

    const projectMedia = [
        project.image,
        ...((project.images || []).filter((img) => img && img !== project.image)),
        project.vidéo,
    ].filter(Boolean);

    const isVideo = (media) => {
        if (typeof media !== 'string') return false;
        return media.endsWith('.webm') || media.endsWith('.mp4') || media.includes('video');
    };

    const activeButtonsCount = (project.categorie === 'Front' || project.categorie === 'Fullstack')
        ? [project.liens.site, project.liens.code, project.liens.maquettes].filter(Boolean).length
        : (project.categorie === 'Design' && project.titre === 'Magazine')
            ? [project.liens.resultat?.magazine, project.liens.resultat?.plancheTendance].filter(Boolean).length
            : [project.liens?.resultat, project.liens?.maquettes].filter(Boolean).length;

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" className="flex items-center justify-center backdrop-blur-sm">
            <Box className="relative bg-[#251949] border-5 border-[#2D327D] w-[95%] md:w-[70%] h-[90%] overflow-y-auto p-4 md:p-8 text-[#EDF2F4] outline-none shadow-2xl">

                <IconButton onClick={handleClose} className="absolute top-0 left-[17.5rem] md:top-[0rem] md:left-[59rem] text-[#EDF2F4]! hover:bg-white/10! z-10 rounded-none!">
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

                <Typography id="modal-modal-title" component="h2" variant="h3" className="text-center text-[1.5rem]! md:text-[2.5rem]! font-['KronaOne-Regular']! px-4 mt-5! mb-10! md:mb-15!">
                    {project.titre}
                </Typography>

                <div className="flex flex-col gap-10 items-center">

                    <div className="relative h-[22rem] md:h-[30rem] w-full flex flex-col rounded-3xl overflow-hidden shadow-2xl" style={{ background: project.style?.modal?.backgroundColor || 'white' }}>

                        <div className="bg-white/100 text-black font-['PlusJakartaSans-Regular'] text-lg md:text-xl py-3 px-4 w-full text-center z-20 shadow-md">
                            {project.rôle}
                        </div>

                        <div className="relative flex-grow w-full h-full min-h-0">
                            <Splide hasTrack={false} options={{
                                type: projectMedia.length > 1 ? 'loop' : 'slide',
                                perPage: 1,
                                start: 0,
                                arrows: projectMedia.length > 1,
                                pagination: false,
                                gap: '0',
                            }} className="w-full h-full absolute inset-0">
                                <SplideTrack className="h-full w-full">
                                    {projectMedia.map((media, index) => (
                                        <SplideSlide key={index} className="h-full w-full">
                                            {isVideo(media) ? (
                                                <video src={media} autoPlay loop muted playsInline className="w-full h-full" style={{ objectFit: project.style?.modal?.imageFit || 'cover' }} />
                                            ) : (
                                                <CardMedia component="img" image={media} onError={(e) => { e.target.className = "bg-white object-cover text-[1.2rem] text-black text-center content-center w-full h-full"; }} alt={project.altImage || `Image ${index + 1} du projet`} className="w-full h-full" style={{ objectFit: project.style?.modal?.imageFit || 'cover' }} />
                                            )}
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>

                                {projectMedia.length > 1 && (
                                    <div className="splide__arrows">
                                        <button className="splide__arrow splide__arrow--prev absolute left-2 top-1/2 -translate-y-1/2 bg-[#201547]/80 p-1.5 rounded-full cursor-pointer hover:bg-[#201547] z-20 border-none flex items-center justify-center">
                                            <IoIosArrowBack size={24} className="text-[#EDF2F4] md:size-[30px]" />
                                        </button>
                                        <button className="splide__arrow splide__arrow--next absolute right-2 top-1/2 -translate-y-1/2 bg-[#201547]/80 p-1.5 rounded-full cursor-pointer hover:bg-[#201547] z-20 border-none flex items-center justify-center">
                                            <IoIosArrowForward size={24} className="text-[#EDF2F4] md:size-[30px]" />
                                        </button>
                                    </div>
                                )}
                            </Splide>
                        </div>
                    </div>

                    <div className="flex flex-col gap-7 px-4 md:px-[5rem] lg:px-[15rem] text-center font-['PlusJakartaSans-Regular']">
                        <div>
                            <p className="mb-2">Contexte :</p>
                            <p className="text-gray-300">{project.contexte}</p>
                        </div>

                        <div>
                            <p className="mb-2">Logiciels/langages :</p>
                            <p className="text-gray-300">{project.logiciels_langages}</p>
                        </div>

                        <div>
                            <p className="mb-2">Dates :</p>
                            <p>{project.dates}</p>
                        </div>

                        <div>
                            <p className="mb-2">Difficultés rencontrées :</p>
                            <p className="text-gray-300">{project.difficultes}</p>
                        </div>
                    </div>

                    {activeButtonsCount === 3 ? (
                        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 w-full mt-4 items-center px-4 md:px-20">
                            <div className="flex justify-center md:justify-end pr-0 md:pr-10 w-full md:w-auto">
                                {(project.categorie === 'Front' || project.categorie === 'Fullstack') && project.liens.site && (
                                    <Button className="h-10 w-[7rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                        <a href={project.liens.site} target="_blank" rel="noopener noreferrer">Voir le site</a>
                                    </Button>
                                )}
                            </div>

                            <div className="flex justify-center w-full md:w-auto">
                                {(project.categorie === 'Front' || project.categorie === 'Fullstack') && project.liens.code && (
                                    <Button className="h-10 w-[8rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                        <a href={project.liens.code} target="_blank" rel="noopener noreferrer">Voir le code</a>
                                    </Button>
                                )}
                            </div>

                            <div className="flex justify-center md:justify-start pl-0 md:pl-10 w-full md:w-auto">
                                {(project.categorie === 'Front' || project.categorie === 'Fullstack') && project.liens.maquettes && (
                                    <Button className="h-10 w-[11rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                        <a href={project.liens.maquettes} target="_blank" rel="noopener noreferrer">Voir les maquettes</a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-20 mt-4 items-center">
                            {(project.categorie === 'Front' || project.categorie === 'Fullstack') && (
                                <>
                                    {project.liens.site && (
                                        <Button className="h-10 w-[7rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                            <a href={project.liens.site} target="_blank" rel="noopener noreferrer">Voir le site</a>
                                        </Button>
                                    )}
                                    {project.liens.code && (
                                        <Button className="h-10 w-[8rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                            <a href={project.liens.code} target="_blank" rel="noopener noreferrer">Voir le code</a>
                                        </Button>
                                    )}
                                    {project.liens.maquettes && (
                                        <Button className="h-10 w-[11rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                            <a href={project.liens.maquettes} target="_blank" rel="noopener noreferrer">Voir les maquettes</a>
                                        </Button>
                                    )}
                                </>
                            )}

                            {project.categorie === 'Design' && (
                                <>
                                    {project.titre === 'Magazine' ? (
                                        <>
                                            {project.liens.resultat.magazine && (
                                                <Button className="h-10 w-[10rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                                    <a href={project.liens.resultat.magazine} target="_blank" rel="noopener noreferrer">Voir le magazine</a>
                                                </Button>
                                            )}
                                            {project.liens.resultat.plancheTendance && (
                                                <Button className="h-10 w-[15rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                                    <a href={project.liens.resultat.plancheTendance} target="_blank" rel="noopener noreferrer">Voir la planche de tendance</a>
                                                </Button>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {project.liens?.resultat && (
                                                <Button className="h-10 w-[11rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                                    <a href={project.liens.resultat} target="_blank" rel="noopener noreferrer" type="application/pdf">Voir le résultat final</a>
                                                </Button>
                                            )}
                                            {project.liens?.maquettes && (
                                                <Button className="h-10 w-[11rem] px-8 rounded-full! cursor-pointer! bg-radial from-[#F7CC1F] to-[#E75F0B] text-[#901616]! text-[0.9rem]! normal-case! font-['PlusJakartaSans-Regular']!">
                                                    <a href={project.liens.maquettes} target="_blank" rel="noopener noreferrer" type="application/pdf">Voir les maquettes</a>
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </Box>
        </Modal>
    );
}

export default Modal_projet;
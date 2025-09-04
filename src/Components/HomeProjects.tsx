import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MotionList, MotionListItem } from "../utils/motionUtils";

function HomeProjects({ setHoveredProject }) {
  const hoverStyle = {
    "&:hover": {
      transition: "scale 0.5s ease-in-out",
      transform: "scale(1.3)",
      fontStyle: "italic",
    },
  };

  const projects = [
    {
      id: "canvas&chaos",
      name: "Canvas&Chaos",
      url: "/projects/canvas&chaos",
      img: "../../public/canvas&chaos.webp",
      type: "E-commerce site",
    },
    {
      id: "artistSite",
      name: "ArtistSite",
      url: "/projects/artistSite",
      img: "./../public/artistSite.webp",
      type: "E-commerce site",
    },
    {
      id: "CrimenPijama",
      name: "Crimen Pijama",
      url: "/projects/crimenPijama",
      img: "../../public/crimen_pijama.webp",
      type: "Web game",
    },
  ];


  //projects variants
  const listVariant = {
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };
  const itemVariant = {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 1.2, ease: "easeIn" } },
  };
  return (
    <Box
      sx={{
        position: { sm: "relative", md: "absolute" },
        right: { sm: 0, md: "50px" },
        height: { xs: "auto", sm: "auto", md: "100dvh", lg: "100dvh" },
        width: { xs: "100%", sm: "100%", md: "40dvw", lg: "30dvw" },
        margin: { xs: "0px 0", sm: "50px 0", md: "0 20px" },
      }}
    >
       <MotionList
        key="projects"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={listVariant}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 0,
          height: "70%",
          justifyContent: "space-evenly",
          marginTop: { xs: "50px", sm: "0px", md: "100px" },
        }}
      > 
        {projects.map((project) => (
          <MotionListItem
            key={project.id}
            variants={itemVariant}
            onMouseEnter={() => setHoveredProject(project.img)}
            onMouseLeave={() => setHoveredProject(null)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: {sm:"center",md:"end"},
            }}
          >
            <Typography variant="h4" sx={hoverStyle}>
              <Link
                to={project.url}
                state={{ direction: "forward" }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {project.name}
              </Link>
            </Typography>
            <Typography variant="subtitle1">{project.type} -</Typography>
          </MotionListItem>
        ))}
       </MotionList> 
    </Box>
  );
}

export default HomeProjects;

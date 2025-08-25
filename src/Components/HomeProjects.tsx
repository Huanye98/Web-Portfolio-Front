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
      img: "https://i.imgur.com/LQNv8Ku.jpeg",
      type: "E-commerce site",
    },
    {
      id: "artistSite",
      name: "ArtistSite",
      url: "/projects/artistSite",
      img: "https://i.imgur.com/9t3XN0V.jpeg",
      type: "E-commerce site",
    },
    {
      id: "CrimenPijama",
      name: "Crimen Pijama",
      url: "/projects/crimenPijama",
      img: "https://i.imgur.com/RRHLQRO.jpeg",
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
        top: { sm: "30%", md: 0, lg: "0" },
        right: { sm: 0, md: "50px" },
        height: { xsm: "auto", sm: "100%", md: "100dvh", lg: "100dvh" },
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
          height: "100%",
          justifyContent: "space-evenly",
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
              alignItems: "end",
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

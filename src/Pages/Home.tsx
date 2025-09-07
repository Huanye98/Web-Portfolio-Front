import { Box, List, Typography } from "@mui/material";
import Sidebar from "../Components/Sidebar";
import HomeProjects from "../Components/HomeProjects";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../Components/Contact";
import About from "../Components/About";
import HomeMain from "../Components/HomeMain";
import CursorTrail from "../Components/CursorTrail";

function Home() {
  const [selected, setSelected] = useState("projects");
  const [hoveredProject, setHoveredProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.active) {
      setSelected(location.state.active);
    }
  }, [location.state]);

  return (
    <Box
      key={"homeWrapper"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        height: "100dvh",
      }}
    >
      <Sidebar />
      <CursorTrail />
      <Box
        key={"homeContent"}
        sx={{ flex: 1, display: "flex", flexDirection: "column",justifyContent:{sm:"start"}}}
      >


        {hoveredProject && (
          <motion.div
            key="fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <Box
              className="hoveredProject"
              sx={{
                position: "absolute",
                width: "60dvw",
                height: "55dvh",
                display: { sm: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                ml: "25px",
                mt: "20px",
              }}
            >
              <img src={hoveredProject} width={"100%"} height={"100%"} style={{ objectFit: "contain" }}/>
            </Box>
          </motion.div>
        )}

        {selected === "contact" ? <Contact /> : null}
        {selected === "about" ? <About /> : null}
        <Box sx={{justifyItems:{xs:"center",sm:"center",md:"start"}, maxHeight:{xs:"50dvh",sm:"50dvh",md:"100dvh"}, }}>
        <HomeMain setSelected={setSelected} />
        </Box>
        {selected === "projects" ? (
          <Box sx={{flex:1,width:"100%",alignSelf:"end",}}>
            <HomeProjects setHoveredProject={setHoveredProject} /> 
          </Box>
        ) : null}
         
      </Box>
    </Box>
  );
}

export default Home;

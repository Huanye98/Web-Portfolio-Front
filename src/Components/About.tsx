import { Box, Typography, List } from "@mui/material";
import { motion } from "framer-motion";
import { variant1 } from "../utils/variants";
function About() {
  return (
    <motion.div
            key={"about"}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variant1}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ margin:{ xs: "0 20px", sm: "0 30px", md: "0 50px" }, padding: {xs: "10px 0px",sm:"25px 0", md:"50px 10px"} }}>
              <Typography variant="h4">About Me</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {xs:"column",sm:"column",md:"row"},
                  alignItems: "start",
                  padding: "5px",
                  gap: {xs:"10px",sm:"20px",md:"30px"},
                }}
              >
                <img
                  src="Captura de pantalla 2024-06-14 160138.png"
                  width={"150px"}
                />
                <Box sx={{ maxWidth: "390px",}}>
                  <Typography variant="body1" sx={{fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" }}}>
                    I am a Full Stack Developer with a passion for creating
                    dynamic and engaging web applications. My journey in web
                    development has been fueled by a love for coding and a
                    desire to build innovative solutions. I have experience in
                    both front-end and back-end technologies, allowing me to
                    create seamless user experiences and robust server-side
                    functionality.
                  </Typography>
                  <Box >
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">CV English</Typography>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">CV Español</Typography>
                  </a>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: {xs:"100%", sm:"100%", md:"50%"},
                  }}
                >
                  <List sx={{padding:0}}>
                    <Typography variant="h6">Skills:</Typography>
                    <Typography variant="body1">
                      - HTML, CSS, JavaScript
                    </Typography>
                    <Typography variant="body1">
                      - React, Node.js, Express
                    </Typography>
                    <Typography variant="body1">
                      - MongoDB, SQL
                    </Typography>
                    <Typography variant="body1">
                      - Git, GitHub
                    </Typography>
                  </List>
                </Box>
              </Box>
            </Box>
          </motion.div>
  )
}

export default About
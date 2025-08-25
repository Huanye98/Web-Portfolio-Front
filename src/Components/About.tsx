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
            <Box sx={{ margin: "0 50px", padding: "50px 10px" }}>
              <Typography variant="h4">About Me</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "5px",
                }}
              >
                <img
                  src="Captura de pantalla 2024-06-14 160138.png"
                  width={"200px"}
                />
                <Box sx={{ maxWidth: "450px", marginLeft: "20px" }}>
                  <Typography variant="body1">
                    I am a Full Stack Developer with a passion for creating
                    dynamic and engaging web applications. My journey in web
                    development has been fueled by a love for coding and a
                    desire to build innovative solutions. I have experience in
                    both front-end and back-end technologies, allowing me to
                    create seamless user experiences and robust server-side
                    functionality.
                  </Typography>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">CV English</Typography>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Typography variant="body1">CV Español</Typography>
                  </a>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <List>
                    <Typography variant="h6">Skills:</Typography>
                    <Typography variant="body1">
                      HTML, CSS, JavaScript
                    </Typography>
                    <Typography variant="body1">
                      React, Node.js, Express
                    </Typography>
                    <Typography variant="body1">MongoDB, SQL</Typography>
                    <Typography variant="body1">Git, GitHub</Typography>
                  </List>
                </Box>
              </Box>
            </Box>
          </motion.div>
  )
}

export default About
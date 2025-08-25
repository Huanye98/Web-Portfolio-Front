import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import { Box, List, ListItem, Typography } from "@mui/material";

function Artistsite() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Sidebar />
      <Box
        sx={{
          margin: " 30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" sx={{ marginLeft: "20px", marginTop: "20px" }}>
          ArtistSite
        </Typography>
        <img src="Captura de pantalla 2024-06-14 160138.png" width={"200px"} />
        <Typography>
          CanvasAndChaos is a dynamic web application that allows users to
          create and share interactive art pieces using HTML5 Canvas. The
          project showcases my skills in front-end development, particularly
          with React and TypeScript, as well as my ability to integrate complex
          functionalities like real-time collaboration and user authentication.
        </Typography>
        <Typography>
          <a
            href="https://canvasandchaos.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://canvasandchaos.netlify.app/
          </a>
        </Typography>
        <Typography>
          <a
            href="github.com/HuanyeZheng/CanvasAndChaos"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/HuanyeZheng/CanvasAndChaos/
          </a>
        </Typography>
        <Typography variant="h3">Functionalities:</Typography>
        <Typography>
          <List>
            <ListItem>
              <Typography variant="body1">
                Real-time collaborative drawing with WebSocket integration.
              </Typography>
              <Typography variant="body1">Stripe</Typography>
              <Typography variant="body1">
                Email verification and user authentication.
              </Typography>
              <Typography variant="body1">
                Postgres database for storing user data and art pieces.
              </Typography>
            </ListItem>
          </List>
        </Typography>
        <img
          src="https://i.imgur.com/3k5Z1bH.png"
          alt="CanvasAndChaos Screenshot"
          style={{ width: "100%", marginTop: "20px" }}
        />
        <Typography variant="h3">Technologies Used:</Typography>
        <Typography>
          <List>
            <ListItem>
              <Typography variant="body1">React</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">TypeScript</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Node.js</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Express</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">PostgreSQL</Typography>
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h3"> </Typography>
        <Typography>
          CanvasAndChaos is a testament to my ability to create engaging and
          interactive web applications. It combines my passion for art and
          technology, allowing users to express their creativity in a digital
          space. The project not only highlights my technical skills but also my
          commitment to delivering high-quality user experiences. I am proud of
          this project and excited to share it with the world.
        </Typography>
        <Link to="/projects/CrimenPijama" style={{ textDecoration: "none" }}>
          <Typography variant="h3"> Next project</Typography>
          <Typography variant="h4">CrimenPijama </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default Artistsite
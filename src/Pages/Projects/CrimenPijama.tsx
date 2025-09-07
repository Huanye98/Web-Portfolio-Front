import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import { Box, List, ListItem, Typography } from "@mui/material";
import ingame from "../../assets/crimen_pijama_ingame.webp";
import postgame from "../../assets/crimen_pijama_postgame.webp";
import crimenpijama from "../../assets/crimen_pijama.webp";

function CrimenPijama() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", }}>
      <Sidebar />
      <Box
        sx={{
          margin: " 30px",
          display: "flex",
          flexDirection: "column",
          gap: 1
        }}
      >
        <Typography variant="h2" sx={{ marginLeft: "20px" }}>
          Crimen Pijama
        </Typography>
          <img
            src={crimenpijama}
            alt="Crimen Pijama Screenshot"
            style={{ width: "50%", margin:"20px 0" }}
          />
        <Box sx={{ display: "flex", flexDirection: "column", }}>

          <Typography>
            Crimen pijama is a 2D point-and-click adventure game developed using
            vanilla JavaScript, HTML, and CSS. The game features a detective
            storyline where players solve mysteries by interacting with various
            characters and objects within the game environment.
          </Typography>
          <Typography>
            <a
              href="https://huanye98.github.io/Crimen-pijama/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://huanye98.github.io/Crimen-pijama/
            </a>
          </Typography>
          <Typography>
            <a
              href="https://github.com/Huanye98/Crimen-pijama"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Huanye98/Crimen-pijama
            </a>
          </Typography>
        </Box>
        <Typography variant="h3" sx={{mt: 2}}>Functionalities:</Typography>
        <Typography>
          <List>
            <ListItem>
              <Typography variant="body1">
                User control with keyboard and mouse inputs.
              </Typography>
              <Typography variant="body1">shooting mechanics</Typography>
              <Typography variant="body1">
                Postgame scoreboard with local storage integration.
              </Typography>
              <Typography variant="body1">
                Parallax scrolling for depth effect.
              </Typography>
            </ListItem>
          </List>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mb: 2 }}>
          <img
            src={ingame}
            alt="Crimen Pijama In-Game Screenshot"
            style={{ width: "50%", marginTop: "20px" }}
          />
          <img
            src={postgame}
            alt="Crimen Pijama Post-Game Screenshot"
            style={{ width: "50%", marginTop: "20px" }}
          />
        </Box>
        <Typography variant="h3">Technologies Used:</Typography>
        <Typography>
          <List>
            <ListItem>
              <Typography variant="body1">Javascript</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Dom Manipulation</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Github pages</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Html</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Css</Typography>
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h3"> </Typography>
        <Typography>
          Crimen pijama is a passion project that helped me explore to the
          depths of vanilla JavaScript and the DOM. It was a fun challenge to
          create an engaging game without relying on modern frameworks, and it
          significantly improved my problem-solving skills and understanding of
          core web technologies.
        </Typography>
        <Link to="/projects/canvas&chaos" style={{ textDecoration: "none" }}>
          <Typography variant="h3" sx={{mt:2}} >Next project</Typography>
          <Typography variant="h4">Canvas&chaos </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default CrimenPijama;

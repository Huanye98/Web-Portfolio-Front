import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import { Box, List, ListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useNavigationDirection from "../../utils/useNavigationDirection";
import about from "../../assets/canvasandchaos_about.webp";
import productEdit from "../../assets/canvasandchaos_productEdit.webp";
import store from "../../assets/canvasandchaos_store.webp";
import canvasandchaos from "../../assets/canvasandchaos.webp";

function CanvasAndChaos() {
  const direction = useNavigationDirection();
  return (
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Sidebar />
      <motion.div
        initial={{ y: direction === "forward" ? 300 : 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: direction === "forward" ? 300 : -300, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            margin: { xs: "10px", sm: "20px", md: "30px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{fontSize: { xs: "3.5rem", sm: "5.5rem", md: "7rem" } }}
          >
            CanvasAndChaos
          </Typography>
          <img
            src={canvasandchaos}
            alt="CanvasAndChaos Screenshot"
            style={{ width: "50%",}}
          />
          <Typography>
            CanvasAndChaos is a dynamic web application that allows users to
            create and share interactive art pieces using HTML5 Canvas. The
            project showcases my skills in front-end development, particularly
            with React and TypeScript, as well as my ability to integrate
            complex functionalities like real-time collaboration and user
            authentication.
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
              href="https://github.com/Huanye98/Typescript-Store-Client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Client
            </a>
          </Typography>
          <Typography>
            <a
              href="https://github.com/Huanye98/Typescript-Store-Server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Server V.1
            </a>
          </Typography>
          <Typography>
            <a
              href="https://github.com/Huanye98/TypeScript-Store-Server-V2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Server V.2 
            </a>
          </Typography>
          <Box sx={{margin: {xs:0,sm:0,md:"20px 0"}, }}>
          <Typography variant="h3">Functionalities:</Typography>
            <List sx={{ display: "flex", flexDirection: {xs:"column",sm:"column",md:"row"} }}>
              <ListItem>
                <Typography variant="body1">
                  - Tokenization with JWT for secure user sessions.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">- Stripe integration for payment processing.</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  - Email verification and user authentication.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  - Postgres database for storing user data and art pieces.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ display:"flex", gap: 1, flexWrap:"wrap" , direction:"row"}}>
          
          <img
            src={store}
            alt="CanvasAndChaos Store Screenshot"
            style={{ width: "40%",}}
          />
          <img
            src={productEdit}
            alt="CanvasAndChaos Product Edit Screenshot"
            style={{ width: "40%",}}
          />
          <img
            src={about}
            alt="CanvasAndChaos About Screenshot"
            style={{ width: "40%",}}
          />
          </Box>
          <Box sx={{margin: "20px 0",}}>
          <Typography variant="h3">Technologies Used:</Typography>
            <List sx={{display:"flex", gap:1, flexDirection:"column"}}>
              <ListItem sx={{padding:0,pl:1}}>
                <Typography variant="body1">- React</Typography>
              </ListItem>
              <ListItem sx={{padding:0,pl:1}}>
                <Typography variant="body1">- TypeScript</Typography>
              </ListItem>
              <ListItem sx={{padding:0,pl:1}}>
                <Typography variant="body1">- Node.js</Typography>
              </ListItem>
              <ListItem sx={{padding:0,pl:1}}>
                <Typography variant="body1">- Express</Typography>
              </ListItem>
              <ListItem sx={{padding:0,pl:1}}>
                <Typography variant="body1">- PostgreSQL</Typography>
              </ListItem>
            </List>
          </Box>
          <Typography variant="h3"> </Typography>
          <Typography>
            CanvasAndChaos is a testament to my ability to create engaging and
            interactive web applications. It combines my passion for art and
            technology, allowing users to express their creativity in a digital
            space. The project not only highlights my technical skills but also
            my commitment to delivering high-quality user experiences. I am
            proud of this project and excited to share it with the world.
          </Typography>
          <Box sx={{alignSelf:{xs:"center",sm:"flex-start",md:"flex-start"} }}>
          <Link to="/projects/artistSite" style={{ textDecoration: "none", marginTop: "40px", }}>
            <Typography variant="h3"> Next project</Typography>
            <Typography variant="h4">ArtistSite </Typography>
          </Link>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default CanvasAndChaos;

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
        <img
          src="../../public/artistsite.webp"
          alt="ArtistSite Screenshot"
          style={{ width: "50%", marginTop: "20px" }}
        />
        <Typography>
          ArtistSite is a full-stack web application designed to empower artists by providing a platform to showcase their artwork, connect with potential buyers, and manage their portfolios. The application features
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
                Cloudinary
              </Typography>
              <Typography variant="body1">Stripe</Typography>
              <Typography variant="body1">
                Email verification and user authentication.
              </Typography>
              <Typography variant="body1">
                MongoDB database for storing user data and art pieces.
              </Typography>
            </ListItem>
          </List>
        </Typography>
        <img
          src="../../public/artistsite_store.webp"
          alt="ArtistSite Store Screenshot"
          style={{ width: "50%", marginTop: "20px" }}
        />
        <img
          src="../../public/artistsite_portfolio.webp"
          alt="ArtistSite Portfolio Screenshot"
          style={{ width: "50%", marginTop: "20px" }}
        />
        <Typography variant="h3">Technologies Used:</Typography>
        <Typography>
          <List>
            <ListItem>
              <Typography variant="body1">MongoDB</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Stripe</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Cloudinary</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Express</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">React</Typography>
            </ListItem>
          </List>
        </Typography>
        <Typography variant="h3"> </Typography>
        <Typography>
          CanvasAndChaos is my attempt to solve the real problem for artists to showcase their work and connect with potential buyers in a seamless and interactive way. 
          The platform features a user-friendly interface, allowing artists to easily upload, manage, and display their portfolios. Buyers can browse artwork, interact with creators, and make purchases securely.
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
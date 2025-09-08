import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MotionBox } from "../utils/motionUtils";

function Sidebar() {
  const Copyright = () => (
    <Typography
      variant="body1"
      sx={{ fontSize: { xs: "0.5rem", sm: "1rem", md: "0.9rem" } }}
    >
      &copy; {new Date().getFullYear()} Huanye Zhu
    </Typography>
  );

  return (
    <MotionBox
      key={"sidebar"}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      height={"30px"}
    >
      <Box
        component="nav"
        className="sidebar"
        sx={{
          position: { xs: "sticky", sm: "sticky", md: "fixed" },
          top: { xs: 0, sm: 0, md: 0 },
          margin: { sm: 0, md: "0 20px" },
          display: "flex",
          justifyContent: "space-around",
          transform: { sm: "none", md: "rotate(90deg)" },
          transformOrigin: "left top",
          wrap: "nowrap",
          width: { xs: "100dvw", sm: "100dvw", md: "100dvh" },
          height: { md: "30px" },
          outline: "1px solid black",
        }}
      >
        <Typography variant="body1">
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Divider
            orientation="vertical"
            sx={{ height: "80%", alignSelf: "center" }}
          />
          <Typography variant="body1">
            <Link
              to={"/"}
              state={{ active: "contact" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "80%", alignSelf: "center" }}
          />
          <Typography variant="body1">
            <Link
              to={"/"}
              state={{ active: "about" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </Typography>
          <Divider
            orientation="vertical"
            sx={{ height: "80%", alignSelf: "center" }}
          />
          <Copyright />
        </Box>
      </Box>
    </MotionBox>
  );
}

export default Sidebar;

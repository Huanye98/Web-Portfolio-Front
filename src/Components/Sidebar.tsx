import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MotionBox } from "../utils/motionUtils";

function Sidebar() {
  const Copyright = () => (
    <Typography variant="body1">
      &copy; {new Date().getFullYear()} Huanye Zheng
    </Typography>
  );

  return (
    <MotionBox
      key={"sidebar"}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Box
        sx={{
          position: { sm: "sticky", md: "fixed" },
          margin: { sm: 0, md: "0 20px" },
          display: "flex",
          justifyContent: "space-around",
          transform: { sm: "none", md: "rotate(90deg)" },
          transformOrigin: "left top",
          wrap: "nowrap",
          width: { sm: "100dvw", md: "100dvh" },
          outline: "1px solid black",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="body1">Home</Typography>
        </Link>
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
          <Typography variant="body1">{<Copyright />} </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
}

export default Sidebar;

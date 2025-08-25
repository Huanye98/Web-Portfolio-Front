import { MotionBox } from "../utils/motionUtils";
import { Box, Button, Divider, Typography } from "@mui/material";
import Line from "./Line";

type Option = "projects" | "contact" | "about";

function HomeMain(props) {
  const { setSelected } = props;
  const handleClick = (option: Option) => {
    setSelected(option);
  };
  const buttonStyle = {
    fontSize: "0.7rem",
    fontWeight: "bold",
    color: "#333",
    textTransform: "none",
  };
  return (
    <MotionBox
      key="main"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: { sm: "0", md: "0 50px" },
        padding: "5px",
        position: { sm: "relative", md: "absolute" },
        top: { sm: 0, md: "60dvh" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        <Line lineLength={150} stroke="red" strokeWidth={3} />
        <Button sx={buttonStyle} onClick={() => handleClick("projects")}>
          Projects
        </Button>
        <Button sx={buttonStyle} onClick={() => handleClick("contact")}>
          Contact
        </Button>
        <Button sx={buttonStyle} onClick={() => handleClick("about")}>
          About
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: 2,
        }}
      >
        <Typography variant="h2">Huanye Zhu</Typography>
        <Typography variant="h5" component="h2">
          Full Stack Developer
        </Typography>
      </Box>
    </MotionBox>
  );
}

export default HomeMain;

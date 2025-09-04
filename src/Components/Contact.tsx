import {motion }from "framer-motion";
import { Box, Snackbar, Typography, } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { variant1 } from "../utils/variants";
import { useState } from "react";
function Contact() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
    const copyEmail = () => {
      navigator.clipboard.writeText("Zhuzhenghuanye@hotmail.com");
      setSnackbarOpen(true);
    };
  return (
    <motion.div
            key={"contact"}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variant1}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                right: 0,
                margin: { xs: "0 20px", sm: "0 30px", md: "0 50px" },
                padding: "50px 10px",
                maxWidth: "390px",
              }}
            >
              <Typography variant="h4">Contact Me</Typography>
              <Typography variant="body1">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                to me via email or connect with me on LinkedIn.
              </Typography>
              <br />
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={() => setSnackbarOpen(false)}
                message="Email copied to clipboard"
              />
              <Typography variant="body1">
                Email: <a href="mailto:Zhuzhenghuanye@hotmail.com">Zhuzhenghuanye@hotmail.com</a> <ContentCopyIcon sx={{ cursor: "pointer", verticalAlign: "middle" }} onClick={copyEmail} /> <br />
                 <a href="https://www.linkedin.com/in/huanye-zhu-016792222/">Linkedin</a> <br />
                 <a href="https://github.com/Huanye98?tab=repositories">Github</a>
              </Typography>
            </Box>
          </motion.div>
  )
}

export default Contact
import {motion }from "framer-motion";
import { Box, Typography } from "@mui/material";
import { variant1 } from "../utils/variants";

function Contact() {
    
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
                margin: "0 50px",
                padding: "50px 10px",
                maxWidth: "450px",
              }}
            >
              <Typography variant="h4">Contact Me</Typography>
              <Typography variant="body1">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                to me via email or connect with me on LinkedIn.
              </Typography>
              <br />
              <Typography variant="body1">
                Email: Zhuzhenghuanye@hotmail.com <br />
                Linkedin: <br />
                Github: <br />
              </Typography>
            </Box>
          </motion.div>
  )
}

export default Contact
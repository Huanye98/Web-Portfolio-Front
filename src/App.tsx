import { Routes, Route, useLocation } from "react-router-dom";
import useNavigationDirection from "./utils/useNavigationDirection";

import Home from "./Pages/Home";
import CanvasAndChaos from "./Pages/Projects/CanvasAndChaos";
import Artistsite from "./Pages/Projects/Artistsite";
import CrimenPijama from "./Pages/Projects/CrimenPijama";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect,useState } from "react";
import { Box, CssBaseline } from "@mui/material";

function App() {
  const location = useLocation();
  const direction = useNavigationDirection();
  const bgColors = ["#5a7cf5", "#d5fd02", "#fd6520", "#ebc5f3", ]

  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const getNewColor = () => {
      if(bgColors.length === 1) return bgColors[0];
      let newColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      while (newColor === bgColor) {
        newColor = bgColors[Math.floor(Math.random() * bgColors.length)];
      }
      return newColor;
    }
    setBgColor(getNewColor());
  },[location.pathname])

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <>
    <CssBaseline />
    <Box sx={{ transition:"background-color 0.5s ease" }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/projects/canvas&chaos"
            element={
              
                <CanvasAndChaos />
              
            }
          />
          <Route
            path="/projects/artistSite"
            element={
              <motion.div
                initial={{ y: direction === "forward"? 300: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y:direction === "forward"? 300: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Artistsite />
              </motion.div>
            }
          />
          <Route
            path="/projects/CrimenPijama"
            element={
              <motion.div
                initial={{ y: direction === "forward"? 300: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y:direction === "forward"? 300: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CrimenPijama />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Box>
    </>
  );
}

export default App;

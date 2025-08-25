import { createContext } from "react";

// page color pallete
const ColorContext = createContext({
  bgColors: ["#5a7cf5", "#d5fd02", "#fd6520", "#ebc5f3"],
  currentColor: "",
  setCurrentColor: (color: string) => {},
});

export type ColorContextType = {
  bgColors: string[];
  currentColor: string;
  setCurrentColor: (color: string) => void;
};

export default ColorContext;
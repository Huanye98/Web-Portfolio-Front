import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useNavigationDirection() {
  const [direction, setDirection] = useState("forward");
  const location = useLocation();
  
  useEffect(() => {
    setDirection((prev) => {
      return prev === "back" ? "forward" : "back";
    });
  }, [location.key]);
  return direction;
}

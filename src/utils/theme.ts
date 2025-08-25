import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "gordita, sans-serif",
        h2: {fontFamily: 'nickainley', fontWeight: 700, fontSize: "100px",color:"#ffffff"},
        h3: {fontFamily: "gordita, sans-serif", fontWeight: 700, fontSize: "1.75rem"},
        h4: {fontFamily: 'nickainley', fontWeight: 700, fontSize: "50px"},
    },
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#F59E0B",
        },
        background: {
            default: "#F3F4F6",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#000000",
            secondary: "#FFFFFF",
        },
    },
})
    export default theme
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './utils/theme.ts'
import ScrollToTop from "./utils/ScrollToTop.tsx"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/Web-Portfolio-Front/'>
    <ScrollToTop />
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

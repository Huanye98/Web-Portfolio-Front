import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './utils/theme.ts'
import ScrollToTop from "./utils/ScrollToTop.tsx"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router >
    <ScrollToTop />
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Router>
  </StrictMode>,
)

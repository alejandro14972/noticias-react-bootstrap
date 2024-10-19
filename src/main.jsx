import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NoticiaProvider } from "./context/NoticiasProvider";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoticiaProvider>
      <App />
    </NoticiaProvider>
  </StrictMode>
)

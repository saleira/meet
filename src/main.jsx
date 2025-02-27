import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as atatus from 'atatus-spa';
atatus.config('737a9221558b45839d88174c0db5114c').install();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
atatus.notify(new Error('Test Atatus Setup'));
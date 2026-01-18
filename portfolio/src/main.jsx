import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Accueil from './pages/Accueil'
import Projets from './pages/Projets'
import Apropos from './pages/Apropos'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/accueil" />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/apropos" element={<Apropos />} />
        </Route>

        <Route path="*" element={<Navigate to="/accueil" />} />
      </Routes>
    </Router>
  </StrictMode>,
)

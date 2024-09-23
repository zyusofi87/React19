import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

import './index.css'
import NetflixSeries from './components/NetflixSeries'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NetflixSeries />
  </StrictMode>,
)

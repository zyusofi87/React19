import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./components/Netflix.css"
// import App from './App.jsx'
import'./App.css'
import './index.css'
import NetflixSeries from './components/NetflixSeries'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <section className='container'>
      <h2 className='card-heading'>List of Best Netflix Series</h2>
    <NetflixSeries />
    </section>
    
  </StrictMode>,
)

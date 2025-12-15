import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './routes/Home'
import MicroLoopPage from './routes/MicroLoopPage'
import BassMINTPage from './routes/BassMINTPage'
import VoicePage from './routes/VoicePage'
import PrisonIslandPage from './routes/PrisonIslandPage'
import ContactPage from './routes/ContactPage'
import ResumePage from './routes/ResumePage'
import LinksPage from './routes/LinksPage'

function App() {
  return (
    <div className="min-h-screen bg-surface-dark text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/microloop" element={<MicroLoopPage />} />
          <Route path="/projects/bassmint" element={<BassMINTPage />} />
          <Route path="/projects/prison-island" element={<PrisonIslandPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
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
    <div className="h-screen bg-background text-surface flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/microloop" element={<MicroLoopPage />} />
          <Route path="/bassmint" element={<BassMINTPage />} />
          <Route path="/prison-island" element={<PrisonIslandPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

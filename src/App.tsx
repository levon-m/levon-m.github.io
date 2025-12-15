import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import MicroLoopPage from './routes/MicroLoopPage'
import BassMINTPage from './routes/BassMINTPage'
import VoicePage from './routes/VoicePage'
import DeliveryMayhemPage from './routes/DeliveryMayhemPage'
import BookmarksPage from './routes/BookmarksPage'

function App() {
  return (
    <div className="min-h-screen bg-background text-surface">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/microloop" element={<MicroLoopPage />} />
          <Route path="/bassmint" element={<BassMINTPage />} />
          <Route path="/delivery-mayhem" element={<DeliveryMayhemPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

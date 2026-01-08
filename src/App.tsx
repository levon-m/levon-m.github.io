import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'

// Lazy load route components for better performance
const MicroLoopPage = lazy(() => import('./routes/MicroLoopPage'))
const BassMINTPage = lazy(() => import('./routes/BassMINTPage'))
const VoicePage = lazy(() => import('./routes/VoicePage'))
const DeliveryMayhemPage = lazy(() => import('./routes/DeliveryMayhemPage'))
const BookmarksPage = lazy(() => import('./routes/BookmarksPage'))

function App() {
  return (
    <div className="min-h-screen bg-background text-surface">
      <main>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/microloop" element={<MicroLoopPage />} />
            <Route path="/bassmint" element={<BassMINTPage />} />
            <Route path="/delivery-mayhem" element={<DeliveryMayhemPage />} />
            <Route path="/voice" element={<VoicePage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App

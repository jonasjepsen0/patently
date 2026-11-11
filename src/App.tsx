import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Play } from './pages/Play'
import { Result } from './pages/Result'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
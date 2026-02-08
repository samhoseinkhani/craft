import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Blog from '@/pages/Blog'
import Home from '@/pages/Home'
import Resume from '@/pages/Resume'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App

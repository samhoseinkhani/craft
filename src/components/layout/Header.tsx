import { Link } from 'react-router-dom'
import Container from './Container'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-bold text-neutral-900 hover:text-primary-600 transition-colors">
            Sam Hoseinkhani
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/resume"
              className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Resume
            </Link>
            <Link
              to="/blog"
              className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Blog
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header

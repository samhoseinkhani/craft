import { Link } from '@tanstack/react-router'
import Container from './Container'

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="hover:text-primary-600 text-lg font-bold text-neutral-900 transition-colors"
          >
            Sam Hoseinkhani
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Home
            </Link>
            <Link
              to="/resume"
              className="font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Resume
            </Link>
            <Link
              to="/blog"
              className="font-medium text-neutral-600 transition-colors hover:text-neutral-900"
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

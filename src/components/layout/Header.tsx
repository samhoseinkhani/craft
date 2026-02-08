import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { CloseIcon, MenuIcon } from '@/icons'
import Container from './Container'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button (Left on Mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-neutral-600 transition-colors hover:text-neutral-900 md:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={isMobileMenuOpen ? CloseIcon : MenuIcon} size={24} />
          </button>

          {/* Logo/Name */}
          <Link
            to="/"
            className="hover:text-primary-600 text-lg font-bold text-neutral-900 transition-colors"
            onClick={closeMobileMenu}
          >
            Sam Hoseinkhani
          </Link>

          {/* Desktop Navigation (Right on Desktop) */}
          <div className="hidden items-center gap-8 md:flex">
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

          {/* Spacer for Mobile (keeps name centered) */}
          <div className="w-10 md:hidden" />
        </nav>
      </Container>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div className="fixed top-16 right-0 left-0 border-b border-neutral-200 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className="px-6 py-3 font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/resume"
                className="px-6 py-3 font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
              <Link
                to="/blog"
                className="px-6 py-3 font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header

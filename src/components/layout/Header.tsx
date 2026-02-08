import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import Icon from '@/components/ui/Icon'
import { Button } from '@/components/ui/button'
import { CloseIcon, MenuIcon } from '@/icons'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between">
          {/* Mobile Menu Button (Left on Mobile) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={isMobileMenuOpen ? CloseIcon : MenuIcon} size={20} />
          </Button>

          {/* Logo/Name */}
          <Link
            to="/"
            className="hover:text-accent-500 font-mono text-xs font-bold tracking-wider uppercase transition-colors sm:text-sm"
            onClick={closeMobileMenu}
          >
            <span className="text-accent-500">{`{`}</span>
            Sam
            <span className="text-accent-500">{`}`}</span>
          </Link>

          {/* Desktop Navigation (Right on Desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="sm" className="font-mono text-xs uppercase" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" className="font-mono text-xs uppercase" asChild>
              <Link to="/resume">Resume</Link>
            </Button>
            <Button variant="ghost" size="sm" className="font-mono text-xs uppercase" asChild>
              <Link to="/blog">Blog</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Theme Toggle for Mobile */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div className="fixed top-14 right-0 left-0 border-b border-gray-200 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-3">
              <Button variant="ghost" className="justify-start font-mono text-xs uppercase" asChild>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start font-mono text-xs uppercase" asChild>
                <Link to="/resume" onClick={closeMobileMenu}>
                  Resume
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start font-mono text-xs uppercase" asChild>
                <Link to="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header

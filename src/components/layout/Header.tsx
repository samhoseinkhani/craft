import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import { Button } from '@/components/ui/button'
import { CloseIcon, MenuIcon } from '@/icons'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
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
            className="hover:text-primary font-mono text-sm font-bold tracking-tight transition-colors sm:text-base"
            onClick={closeMobileMenu}
          >
            <span className="text-primary">{`{`}</span>
            Sam
            <span className="text-primary">{`}`}</span>
          </Link>

          {/* Desktop Navigation (Right on Desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/resume">Resume</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/blog">Blog</Link>
            </Button>
          </div>

          {/* Spacer for Mobile (keeps name centered) */}
          <div className="w-10 md:hidden" />
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="bg-background/80 fixed inset-0 top-16 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div className="bg-background fixed top-16 right-0 left-0 border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/resume" onClick={closeMobileMenu}>
                  Resume
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
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

import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import Icon from '@/components/ui/Icon'
import { Button } from '@/components/ui/button'
import { CloseIcon, MenuIcon } from '@/icons'
import { durations, easings, respectsMotion, safeAnimate } from '@/utils/animations'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const backdropRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Animate mobile menu entrance
  useEffect(() => {
    if (!respectsMotion()) return

    if (isMobileMenuOpen && backdropRef.current && menuRef.current) {
      // Fade in backdrop
      safeAnimate(backdropRef.current, { opacity: [0, 1] }, { duration: durations.fast })

      // Slide down menu
      safeAnimate(
        menuRef.current,
        { opacity: [0, 1], transform: ['translateY(-10px)', 'translateY(0)'] },
        { duration: durations.normal, easing: easings.smooth }
      )
    }
  }, [isMobileMenuOpen])

  return (
    <header className="border-border bg-background/95 fixed top-0 right-0 left-0 z-50 border-b-2 backdrop-blur-sm">
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
            className="hover:text-primary font-mono text-sm font-black tracking-wider uppercase transition-colors sm:text-base"
            onClick={closeMobileMenu}
          >
            <span className="text-primary">{`{`}</span>
            Sam
            <span className="text-primary">{`}`}</span>
          </Link>

          {/* Desktop Navigation (Right on Desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <Button
              variant="ghost"
              size="sm"
              className="font-mono text-sm font-bold uppercase"
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="font-mono text-sm font-bold uppercase"
              asChild
            >
              <Link to="/resume">Resume</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="font-mono text-sm font-bold uppercase"
              asChild
            >
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
            ref={backdropRef}
            className="bg-foreground/10 fixed inset-0 top-16 opacity-0 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <div
            ref={menuRef}
            className="border-border bg-background fixed top-16 right-0 left-0 border-b-2 opacity-0 shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-3">
              <Button
                variant="ghost"
                className="justify-start font-mono text-sm font-bold uppercase"
                asChild
              >
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start font-mono text-sm font-bold uppercase"
                asChild
              >
                <Link to="/resume" onClick={closeMobileMenu}>
                  Resume
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="justify-start font-mono text-sm font-bold uppercase"
                asChild
              >
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

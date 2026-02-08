import Container from './Container'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm text-neutral-600">
            © {currentYear} Sam Hoseinkhani. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hsamhoseinkhani@gmail.com"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Email
            </a>
            <a
              href="https://github.com/samhoseinkhani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/samhoseinkhani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

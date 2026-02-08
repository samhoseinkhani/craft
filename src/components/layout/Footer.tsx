import Container from './Container'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-600 text-sm">
            © {currentYear} Sam Hoseinkhani. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hsamhoseinkhani@gmail.com"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
            >
              Email
            </a>
            <a
              href="https://github.com/samhoseinkhani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/samhoseinkhani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
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

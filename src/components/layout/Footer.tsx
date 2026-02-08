import { Button } from '@/components/ui/button'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-muted-foreground text-sm">
            <span className="text-primary font-mono">{`{}`}</span> © {currentYear} Sam Hoseinkhani
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:hsamhoseinkhani@gmail.com">Email</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/samhoseinkhani" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://linkedin.com/in/samhoseinkhani"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

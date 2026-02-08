import Icon from '@/components/ui/Icon'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon, MailIcon } from '@/icons'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-border bg-muted/30 border-t-2">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-muted-foreground font-mono text-sm font-bold tracking-wide">
            <span className="text-primary font-black">{`{}`}</span> © {currentYear} Sam Hoseinkhani
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="font-mono text-sm font-bold uppercase"
              asChild
            >
              <a href="mailto:hsamhoseinkhani@gmail.com">
                <Icon icon={MailIcon} size={16} />
                <span className="hidden md:inline">Email</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="font-mono text-sm font-bold uppercase"
              asChild
            >
              <a href="https://github.com/samhoseinkhani" target="_blank" rel="noopener noreferrer">
                <Icon icon={GithubIcon} size={16} />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="font-mono text-sm font-bold uppercase"
              asChild
            >
              <a
                href="https://linkedin.com/in/samhoseinkhani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={LinkedinIcon} size={16} />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { createLazyFileRoute } from '@tanstack/react-router'
import avatar from '@/assets/avatar.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const Route = createLazyFileRoute('/_app/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-muted/20 relative overflow-hidden border-b bg-gradient-to-b">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:4rem_4rem]" />

        <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Avatar */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full blur-2xl" />
                <img
                  src={avatar}
                  alt="Sam Hoseinkhani"
                  className="border-background ring-primary/10 relative size-32 rounded-full border-4 object-cover shadow-2xl ring-2"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Sam Hoseinkhani
            </h1>
            <p className="text-muted-foreground mb-2 text-xl sm:text-2xl">
              Senior Frontend Developer
            </p>
            <p className="text-muted-foreground mb-8 font-mono text-sm">
              <span className="text-primary">{`{}`}</span> · Malmö, Sweden
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">WebSockets</Badge>
              <Badge variant="secondary">Real-time Systems</Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume">Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              <span className="text-primary font-mono text-xl">{`{}`}</span> — my symbol. The curly
              braces represent the structure and elegance of code, reminding me that great software
              is built on solid foundations.
            </p>

            <p>
              I'm a developer with{' '}
              <strong className="text-foreground">7+ years of experience</strong> who admires{' '}
              <strong className="text-foreground">
                scalable, maintainable, and well-architected
              </strong>{' '}
              code in frontend development. I see it as a perfect blend of engineering and craft.
            </p>

            <p>
              I've built everything from{' '}
              <strong className="text-foreground">real-time visual SCADA editors</strong> to{' '}
              <strong className="text-foreground">secure cryptocurrency platforms</strong>, handling
              thousands of daily transactions in high-stakes environments.
            </p>

            <p>
              I have a passion for{' '}
              <strong className="text-foreground">performance optimization</strong>,{' '}
              <strong className="text-foreground">architectural decisions</strong>, and{' '}
              <strong className="text-foreground">building systems that scale</strong>. I believe in
              the power of <strong className="text-foreground">collaboration</strong>, thoughtful{' '}
              <strong className="text-foreground">code reviews</strong>, and{' '}
              <strong className="text-foreground">mentorship</strong> to elevate entire teams.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Featured Projects Placeholder */}
      <section id="projects" className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground">
              Building scalable, high-performance applications for complex domains
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 - Placeholder */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>SCADA Visual Editor</CardTitle>
                <CardDescription>Teracloud · 2024-Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Industrial visual system mapper built from scratch with modern React patterns and
                  real-time WebSocket synchronization.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React 19
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    WebSocket
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 - Placeholder */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Crypto Platform</CardTitle>
                <CardDescription>Previous Work</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Secure cryptocurrency trading platform handling thousands of transactions daily
                  with real-time updates.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    WebRTC
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Redux
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 - Placeholder */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>More Projects</CardTitle>
                <CardDescription>Coming Soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Additional project showcases coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

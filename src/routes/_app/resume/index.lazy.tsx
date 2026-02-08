import { createLazyFileRoute } from '@tanstack/react-router'
import { AnimatedElement } from '@/components/animated'
import Container from '@/components/layout/Container'
import Section from '@/components/ui/Section'
import { TiltCard } from '@/components/ui/tilt-card'
import { animations } from '@/utils/animations'

export const Route = createLazyFileRoute('/_app/resume/')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <Section spacing="large">
      <Container>
        <AnimatedElement
          as="h1"
          className="mb-6 text-center font-mono text-4xl font-black uppercase md:text-5xl"
        >
          Resume
        </AnimatedElement>
        <AnimatedElement
          as="p"
          animation={animations.fade.inUp}
          className="text-muted-foreground mb-12 text-center font-mono text-base font-semibold"
        >
          Professional experience, skills, and education.
        </AnimatedElement>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="mb-8 font-mono text-2xl font-black uppercase">Experience</h2>
          <div className="space-y-6">
            <TiltCard>
              <div className="bg-card border-border group hover:border-primary rounded-lg border-2 p-6 transition-colors">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 font-mono text-xl font-bold">Senior Frontend Developer</h3>
                    <p className="text-primary mb-2 font-mono text-sm font-bold">Teracloud</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-xs font-bold whitespace-nowrap">
                    2024 - Present
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 font-mono text-sm">
                  Built industrial SCADA editor from scratch with real-time WebSocket
                  synchronization. Architected modern React solution replacing 5-year legacy system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs font-bold">
                    React 19
                  </span>
                  <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs font-bold">
                    TypeScript
                  </span>
                  <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs font-bold">
                    WebSocket
                  </span>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="bg-card border-border group hover:border-primary rounded-lg border-2 p-6 transition-colors">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 font-mono text-xl font-bold">Frontend Developer</h3>
                    <p className="text-primary mb-2 font-mono text-sm font-bold">Crypto Platform</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-xs font-bold whitespace-nowrap">
                    2022 - 2024
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 font-mono text-sm">
                  Developed high-performance trading platform with real-time data visualization and
                  WebRTC integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs font-bold">
                    Next.js
                  </span>
                  <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs font-bold">
                    WebRTC
                  </span>
                  <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs font-bold">
                    Redis
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="mb-8 font-mono text-2xl font-black uppercase">Skills</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <TiltCard scale={1.05}>
              <div className="bg-card border-border group hover:border-primary h-full rounded-lg border-2 p-6 text-center transition-colors">
                <div className="text-primary mb-4 font-mono text-4xl font-black">⚛️</div>
                <h3 className="mb-3 font-mono text-lg font-bold">Frontend</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-mono text-xs">
                    React • TypeScript • Next.js
                  </p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Tailwind CSS • Motion One
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard scale={1.05}>
              <div className="bg-card border-border group hover:border-primary h-full rounded-lg border-2 p-6 text-center transition-colors">
                <div className="text-primary mb-4 font-mono text-4xl font-black">🔌</div>
                <h3 className="mb-3 font-mono text-lg font-bold">Real-time</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-mono text-xs">WebSocket • WebRTC</p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Server-Sent Events • Redis
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard scale={1.05}>
              <div className="bg-card border-border group hover:border-primary h-full rounded-lg border-2 p-6 text-center transition-colors">
                <div className="text-primary mb-4 font-mono text-4xl font-black">🛠️</div>
                <h3 className="mb-3 font-mono text-lg font-bold">Tools</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-mono text-xs">Vite • Zustand • Vitest</p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Playwright • Git • Docker
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="mb-8 font-mono text-2xl font-black uppercase">Education</h2>
          <TiltCard>
            <div className="bg-card border-border group hover:border-primary rounded-lg border-2 p-6 transition-colors">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 font-mono text-xl font-bold">Computer Science</h3>
                  <p className="text-primary mb-2 font-mono text-sm font-bold">University Name</p>
                </div>
                <span className="text-muted-foreground font-mono text-xs font-bold whitespace-nowrap">
                  2015 - 2019
                </span>
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                Bachelor's degree in Computer Science with focus on web technologies and software
                architecture.
              </p>
            </div>
          </TiltCard>
        </div>
      </Container>
    </Section>
  )
}

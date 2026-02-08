import { createLazyFileRoute } from '@tanstack/react-router'
import { AnimatedElement } from '@/components/animated'
import Container from '@/components/layout/Container'
import Section from '@/components/ui/Section'
import { animations } from '@/utils/animations'

export const Route = createLazyFileRoute('/_app/resume/')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <Section spacing="large">
      <Container>
        <AnimatedElement as="h1" className="mb-6 text-4xl font-black md:text-5xl">
          Resume
        </AnimatedElement>
        <AnimatedElement
          as="p"
          animation={animations.fade.inUp}
          className="text-muted-foreground mb-8 text-base font-semibold"
        >
          Professional experience, skills, and education.
        </AnimatedElement>
        <AnimatedElement
          animation={animations.scale.in}
          threshold={0.2}
          className="bg-muted/30 border-border rounded-lg border-2 p-12 text-center"
        >
          <p className="text-muted-foreground text-sm font-semibold">Content coming soon...</p>
        </AnimatedElement>
      </Container>
    </Section>
  )
}

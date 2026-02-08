import { createLazyFileRoute } from '@tanstack/react-router'
import Container from '@/components/layout/Container'
import Section from '@/components/ui/Section'

export const Route = createLazyFileRoute('/_app/resume/')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <Section spacing="large">
      <Container>
        <h1 className="mb-6 text-4xl font-black md:text-5xl">Resume</h1>
        <p className="text-muted-foreground mb-8 text-base font-semibold">
          Professional experience, skills, and education.
        </p>
        <div className="bg-muted/30 border-border rounded-lg border-2 p-12 text-center">
          <p className="text-muted-foreground text-sm font-semibold">Content coming soon...</p>
        </div>
      </Container>
    </Section>
  )
}

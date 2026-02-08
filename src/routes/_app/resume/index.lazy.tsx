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
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Resume</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Professional experience, skills, and education.
        </p>
        <div className="rounded-lg bg-muted/30 p-12 text-center">
          <p className="text-lg text-muted-foreground">Content coming soon...</p>
        </div>
      </Container>
    </Section>
  )
}

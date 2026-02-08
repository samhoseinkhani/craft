import { createLazyFileRoute } from '@tanstack/react-router'
import Container from '@/components/layout/Container'
import Section from '@/components/ui/Section'

export const Route = createLazyFileRoute('/_app/blog/')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <Section spacing="large">
      <Container>
        <h1 className="mb-6 text-4xl font-black md:text-5xl">Blog</h1>
        <p className="text-muted-foreground mb-8 text-base font-semibold">
          Technical writing and thoughts on software development.
        </p>
        <div className="bg-muted/30 border-border rounded-lg border-2 p-12 text-center">
          <p className="text-muted-foreground text-sm font-semibold">
            No posts yet. Check back soon!
          </p>
        </div>
      </Container>
    </Section>
  )
}

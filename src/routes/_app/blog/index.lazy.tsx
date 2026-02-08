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
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Blog</h1>
        <p className="mb-8 text-lg text-neutral-600">
          Technical writing and thoughts on software development.
        </p>
        <div className="rounded-lg bg-neutral-50 p-12 text-center">
          <p className="text-lg text-neutral-500">No posts yet. Check back soon!</p>
        </div>
      </Container>
    </Section>
  )
}

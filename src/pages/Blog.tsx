import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Section from '@/components/ui/Section'

function Blog() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section spacing="large">
          <Container>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-neutral-600 mb-8">
              Technical writing and thoughts on software development.
            </p>
            <div className="bg-neutral-50 rounded-lg p-12 text-center">
              <p className="text-neutral-500 text-lg">
                No posts yet. Check back soon!
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default Blog

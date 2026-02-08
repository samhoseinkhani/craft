import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Section from '@/components/ui/Section'

function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section spacing="large">
          <Container size="narrow">
            <div className="min-h-[70vh] flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                Hello World 👋
              </h1>

              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6">
                <p>
                  <span className="text-2xl font-mono text-primary-600">{`{}`}</span> —
                  it's my symbol. The curly braces represent the structure and elegance of code,
                  reminding me that great software is built on solid foundations.
                </p>

                <p>
                  I'm a developer with <strong>7+ years of experience</strong> who admires{' '}
                  <strong>scalable, maintainable, and well-architected</strong> code in
                  front-end development. I see it as a perfect blend of engineering and craft.
                  While I've primarily worked with <strong>React and TypeScript</strong> throughout
                  my career, I'm not married to any single technology.
                </p>

                <p>
                  <strong>JavaScript, TypeScript, and modern web standards</strong> are the
                  foundation of my expertise, and I'm always eager to explore new frameworks
                  and tools. I've built everything from <strong>real-time visual SCADA editors</strong> to{' '}
                  <strong>secure cryptocurrency platforms</strong>, handling thousands of daily
                  transactions in high-stakes environments.
                </p>

                <p>
                  I have a passion for <strong>performance optimization</strong>,
                  <strong> architectural decisions</strong>, and <strong>building systems that scale</strong>.
                  I believe in the power of <strong>collaboration</strong>, thoughtful
                  <strong> code reviews</strong>, and <strong>mentorship</strong> to elevate
                  entire teams.
                </p>

                <p>
                  I love creating <strong>meaningful, interactive user experiences</strong> that
                  feel both polished and purposeful.
                </p>

                <p className="text-neutral-600 italic">
                  Based in Malmö, Sweden. Originally from Tehran, Iran.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default Home

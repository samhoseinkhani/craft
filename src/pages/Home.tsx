import avatar from '@/assets/avatar.png'
import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Section from '@/components/ui/Section'

function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section spacing="large">
          <Container size="narrow">
            <div className="flex min-h-[70vh] flex-col justify-center">
              {/* Avatar */}
              <div className="mb-8">
                <img
                  src={avatar}
                  alt="Sam Hoseinkhani"
                  className="border-primary-100 h-32 w-32 rounded-full border-4 object-cover shadow-lg"
                />
              </div>

              <h1 className="mb-8 text-5xl font-bold md:text-6xl">Hello World 👋</h1>

              <div className="prose prose-lg max-w-none space-y-6 leading-relaxed text-neutral-700">
                <p>
                  <span className="text-primary-600 font-mono text-2xl">{`{}`}</span> — it's my
                  symbol. The curly braces represent the structure and elegance of code, reminding
                  me that great software is built on solid foundations.
                </p>

                <p>
                  I'm a developer with <strong>7+ years of experience</strong> who admires{' '}
                  <strong>scalable, maintainable, and well-architected</strong> code in front-end
                  development. I see it as a perfect blend of engineering and craft. While I've
                  primarily worked with <strong>React and TypeScript</strong> throughout my career,
                  I'm not married to any single technology.
                </p>

                <p>
                  <strong>JavaScript, TypeScript, and modern web standards</strong> are the
                  foundation of my expertise, and I'm always eager to explore new frameworks and
                  tools. I've built everything from <strong>real-time visual SCADA editors</strong>{' '}
                  to <strong>secure cryptocurrency platforms</strong>, handling thousands of daily
                  transactions in high-stakes environments.
                </p>

                <p>
                  I have a passion for <strong>performance optimization</strong>,
                  <strong> architectural decisions</strong>, and{' '}
                  <strong>building systems that scale</strong>. I believe in the power of{' '}
                  <strong>collaboration</strong>, thoughtful
                  <strong> code reviews</strong>, and <strong>mentorship</strong> to elevate entire
                  teams.
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

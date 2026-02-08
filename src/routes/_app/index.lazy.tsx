import { createLazyFileRoute } from '@tanstack/react-router'
import avatar from '@/assets/avatar.png'

export const Route = createLazyFileRoute('/_app/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="py-8">
      {/* Hero Section - Ultra Minimal */}
      <section className="relative">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Avatar */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="bg-accent-500/20 absolute inset-0 animate-pulse rounded-full blur-3xl" />
                <img
                  src={avatar}
                  alt="Sam Hoseinkhani"
                  className="ring-accent-500 relative size-32 rounded-full border-4 border-white object-cover shadow-2xl ring-4"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="mb-2 font-mono text-5xl leading-none font-black tracking-tighter uppercase sm:text-6xl lg:text-7xl">
              Sam Hoseinkhani
            </h1>
            <p className="mb-1 font-mono text-sm font-bold tracking-wider text-gray-700 uppercase">
              Senior Frontend Developer
            </p>
            <p className="mb-8 font-mono text-sm font-medium tracking-wide text-gray-600">
              <span className="text-accent-500">{`{}`}</span> · Malmö, Sweden
            </p>

            {/* Personal Story - Placeholder */}
            <div className="border-accent-500 mx-auto max-w-xl border-l-4 pl-6">
              <p className="font-mono text-sm leading-relaxed text-gray-500">
                <span className="text-gray-600">// TODO:</span> Your personal story goes here
                <br />
                <span className="text-gray-600">//</span> A brief narrative about your journey,
                philosophy, or what drives you.
                <br />
                <span className="text-gray-600">//</span> 2-3 sentences that give visitors a glimpse
                into who you are.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

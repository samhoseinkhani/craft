import { createLazyFileRoute } from '@tanstack/react-router'
import { stagger } from 'motion'
import { useEffect, useRef } from 'react'
import avatar from '@/assets/avatar.png'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { durations, easings, respectsMotion, safeAnimate, scaleInCenter } from '@/utils/animations'

export const Route = createLazyFileRoute('/_app/')({
  component: HomePage,
})

function HomePage() {
  // Refs for hero section animations
  const avatarRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const locationRef = useRef<HTMLParagraphElement>(null)

  // Scroll animation for story section
  const storyRef = useScrollAnimation<HTMLDivElement>()

  // Hero entrance animation on mount
  useEffect(() => {
    if (!respectsMotion()) return

    const elements = [avatarRef.current, nameRef.current, subtitleRef.current, locationRef.current]

    // Animate each element with stagger
    safeAnimate(
      elements.filter(Boolean) as HTMLElement[],
      {
        opacity: [0, 1],
        transform: ['translateY(20px)', 'translateY(0)'],
      },
      {
        duration: durations.slow,
        easing: easings.smooth,
        delay: stagger(0.15),
      }
    )

    // Special scale animation for avatar
    if (avatarRef.current) {
      safeAnimate(avatarRef.current, scaleInCenter, {
        duration: durations.slower,
        easing: easings.smooth,
      })
    }
  }, [])
  return (
    <div className="py-8">
      {/* Hero Section - Ultra Minimal */}
      <section className="relative">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_right,hsl(var(--hue)_var(--saturation-low)_88%/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hue)_var(--saturation-low)_88%/0.15)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[4rem_4rem] dark:bg-[linear-gradient(to_right,hsl(var(--hue)_var(--saturation-low)_100%/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hue)_var(--saturation-low)_100%/0.05)_1px,transparent_1px)]" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Avatar */}
            <div ref={avatarRef} className="mb-8 flex justify-center opacity-0">
              <div className="relative">
                <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full blur-3xl" />
                <img
                  src={avatar}
                  alt="Sam Hoseinkhani"
                  className="border-background ring-primary relative size-40 rounded-full border-8 object-cover shadow-2xl ring-8 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1
              ref={nameRef}
              className="mb-3 font-mono text-4xl leading-none font-black tracking-tighter uppercase opacity-0 sm:text-5xl lg:text-6xl"
            >
              Sam Hoseinkhani
            </h1>
            <p
              ref={subtitleRef}
              className="text-foreground/70 mb-2 font-mono text-sm font-black tracking-wider uppercase opacity-0"
            >
              Senior Frontend Developer
            </p>
            <p
              ref={locationRef}
              className="text-muted-foreground mb-10 font-mono text-xs font-bold tracking-wide opacity-0"
            >
              <span className="text-primary font-black">{`{}`}</span> · Malmö, Sweden
            </p>

            {/* Personal Story - Placeholder */}
            <div ref={storyRef} className="border-primary mx-auto max-w-xl border-l-8 pl-8">
              <p className="text-muted-foreground font-mono text-sm leading-relaxed font-semibold">
                <span className="text-foreground/60 font-bold">// TODO:</span> Your personal story
                goes here
                <br />
                <span className="text-foreground/60 font-bold">//</span> A brief narrative about
                your journey, philosophy, or what drives you.
                <br />
                <span className="text-foreground/60 font-bold">//</span> 2-3 sentences that give
                visitors a glimpse into who you are.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

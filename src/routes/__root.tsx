import { Outlet, createRootRoute } from '@tanstack/react-router'
import { CursorParticles } from '@/components/CursorParticles'
import { DeveloperMode } from '@/components/DeveloperMode'
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts'
import { KonamiCode } from '@/components/KonamiCode'
import { ScrollProgress } from '@/components/ScrollProgress'

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollProgress />
      <KonamiCode />
      <KeyboardShortcuts />
      <CursorParticles />
      <DeveloperMode />
      <Outlet />
    </>
  ),
})

import { Outlet, createRootRoute } from '@tanstack/react-router'
import { CursorParticles } from '@/components/CursorParticles'
import { DeveloperMode } from '@/components/DeveloperMode'
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts'
import { KonamiCode } from '@/components/KonamiCode'

export const Route = createRootRoute({
  component: () => (
    <>
      <KonamiCode />
      <KeyboardShortcuts />
      <CursorParticles />
      <DeveloperMode />
      <Outlet />
    </>
  ),
})

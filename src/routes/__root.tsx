import { Outlet, createRootRoute } from '@tanstack/react-router'
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts'
import { KonamiCode } from '@/components/KonamiCode'

export const Route = createRootRoute({
  component: () => (
    <>
      <KonamiCode />
      <KeyboardShortcuts />
      <Outlet />
    </>
  ),
})

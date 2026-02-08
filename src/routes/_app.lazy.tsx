import { createLazyFileRoute } from '@tanstack/react-router'
import AppLayout from '@/components/layout/AppLayout'

export const Route = createLazyFileRoute('/_app')({
  component: AppLayout,
})

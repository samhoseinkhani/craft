import type { ComponentProps, ComponentType, SVGProps } from 'react'
import type { Icon as LucideIconType } from '@/icons'

// Support both Lucide icons and custom SVG icons
type IconType = LucideIconType | ComponentType<SVGProps<SVGSVGElement>>

interface IconProps extends Omit<ComponentProps<'svg'>, 'ref'> {
  icon: IconType
  size?: number
}

function Icon({ icon: IconComponent, size = 20, className = '', ...props }: IconProps) {
  // Handle both Lucide icons (expect size prop) and custom SVG icons (expect width/height)
  return (
    <IconComponent
      size={size}
      width={size}
      height={size}
      className={className}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    />
  )
}

export default Icon

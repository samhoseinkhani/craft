import type { ComponentProps } from 'react'
import type { Icon as IconType } from '@/icons'

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

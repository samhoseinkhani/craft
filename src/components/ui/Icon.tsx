import type { ComponentProps } from 'react'
import type { Icon as IconType } from '@/icons'

interface IconProps extends Omit<ComponentProps<'svg'>, 'ref'> {
  icon: IconType
  size?: number
}

function Icon({ icon: IconComponent, size = 20, className = '', ...props }: IconProps) {
  return <IconComponent size={size} className={className} {...props} />
}

export default Icon

import type { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow'
}

function Container({ size = 'default', className = '', children, ...props }: ContainerProps) {
  const maxWidth = {
    default: 'max-w-6xl',
    narrow: 'max-w-4xl',
  }

  return (
    <div className={`${maxWidth[size]} mx-auto px-6 md:px-8 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container

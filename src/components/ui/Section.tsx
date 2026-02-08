import type { HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'normal' | 'large'
}

function Section({ spacing = 'normal', className = '', children, ...props }: SectionProps) {
  const spacingStyles = {
    normal: 'py-16 md:py-20',
    large: 'py-20 md:py-28',
  }

  return (
    <section className={`${spacingStyles[spacing]} ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section

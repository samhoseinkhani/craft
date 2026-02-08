import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

function Card({ hover = false, className = '', children, ...props }: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-neutral-200 p-6'
  const hoverStyles = hover ? 'transition-all duration-200 hover:shadow-lg hover:border-neutral-300' : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card

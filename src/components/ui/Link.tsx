import type { AnchorHTMLAttributes } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
}

function Link({ external = false, className = '', children, ...props }: LinkProps) {
  const baseStyles = 'text-primary hover:opacity-80 transition-all relative group'
  const underlineStyles =
    'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all group-hover:after:w-full'

  return (
    <a
      className={`${baseStyles} ${underlineStyles} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link

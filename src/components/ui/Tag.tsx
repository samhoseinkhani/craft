import type { HTMLAttributes } from 'react'

type TagProps = HTMLAttributes<HTMLSpanElement>

function Tag({ className = '', children, ...props }: TagProps) {
  const baseStyles =
    'inline-block px-3 py-1 text-sm font-medium bg-primary-50 text-primary-700 rounded-full'

  return (
    <span className={`${baseStyles} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Tag

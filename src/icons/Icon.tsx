import type { LucideProps } from 'lucide-react'
import type { SVGProps } from 'react'

// UI Icons from Lucide (no brand icons)
export { Menu as MenuIcon, Moon as MoonIcon, Sun as SunIcon, X as CloseIcon } from 'lucide-react'

// Social/Brand Icons (custom SVGs to avoid deprecated Lucide brand icons)
export { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons'

// Custom Icon type that works with both Lucide and custom SVG icons
export type Icon = React.ComponentType<LucideProps> | React.ComponentType<SVGProps<SVGSVGElement>>

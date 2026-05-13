// Common component prop types
export interface SectionIntroProps {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center' | 'right'
  tone?: 'default' | 'accent'
}

export interface CardProps {
  className?: string
}

export interface ButtonProps {
  label: string
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
  variant?: 'primary' | 'secondary' | 'outline'
}

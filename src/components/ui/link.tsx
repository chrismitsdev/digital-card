import {cn} from '@/lib/utils'

type LinkProps = React.PropsWithChildren<{
  className?: string
  href: string
  variant?: 'primary' | 'secondary'
}>

function Link({className, variant = 'primary', href, children}: LinkProps) {
  return (
    <a
      className={cn(
        'px-4 block-10 flex items-center rounded',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && '',
        className
      )}
      href={href}
      target='_blank'
      rel='noopener'
    >
      {children}
    </a>
  )
}

Link.displayName = 'Link'

export {Link}

import {cn} from '@/src/lib/utils'

type IconLinkProps = React.PropsWithChildren<{
  className?: React.ComponentProps<'a'>['className']
  'aria-label': React.ComponentProps<'a'>['aria-label']
  href: React.ComponentProps<'a'>['href']
  target?: React.ComponentProps<'a'>['target']
  variant?: 'solid' | 'soft'
}>

function IconLink({
  className,
  'aria-label': ariaLabel,
  href,
  target,
  variant = 'solid',
  children
}: IconLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={cn(
        'size-8 inline-flex items-center justify-center rounded-full [&>svg]:size-4 [&>svg]:shrink-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 sm:size-10',
        // Variant solid
        variant === 'solid' && [
          'bg-primary',
          'hover:bg-primary/80',
          'focus-visible:bg-primary/80',
          'focus-visible:outline-primary',
          'text-primary-foreground'
        ],
        // Variant soft
        variant === 'soft' && [
          'bg-secondary',
          'hover:bg-secondary/80',
          'focus-visible:bg-secondary/80',
          'focus-visible:outline-secondary',
          'text-secondary-foreground'
        ],
        className
      )}
      href={href}
      target={target}
      {...(target === '_blank' && {rel: 'noopener noreferrer'})}
    >
      {children}
    </a>
  )
}

export {IconLink}

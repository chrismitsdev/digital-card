import {cn} from '@/src/lib/utils'

type LinkProps = React.PropsWithChildren<{
  className?: React.ComponentProps<'a'>['className']
  href: React.ComponentProps<'a'>['href']
  target?: React.ComponentProps<'a'>['target']
  download?: React.ComponentProps<'a'>['download']
  variant?: 'solid' | 'soft'
}>

function Link({
  className,
  href,
  target,
  download,
  variant = 'solid',
  children
}: LinkProps) {
  return (
    <a
      className={cn(
        'px-3 block-10 flex justify-center items-center gap-2 text-sm rounded [&>svg]:size-4 [&>svg]:shrink-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-4 sm:text-base',
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
      download={download}
      {...(target === '_blank' && {rel: 'noopener noreferrer'})}
    >
      {children}
    </a>
  )
}

export {Link}

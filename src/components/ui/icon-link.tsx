import {cn} from '@/src/lib/utils'

type IconlinkProps = React.ComponentPropsWithRef<'a'> & {
  'aria-label': string
  variant?: 'solid' | 'soft'
}

function Iconlink({
  'aria-label': ariaLabel,
  className,
  variant = 'solid',
  href,
  ...props
}: IconlinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={cn(
        'size-10 inline-flex items-center justify-center rounded-full [&>svg]:size-4 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
        // Variant solid
        'data-[variant="solid"]:bg-primary',
        'data-[variant="solid"]:hover:bg-primary/80',
        'data-[variant="solid"]:focus-visible:bg-primary/80',
        'data-[variant="solid"]:text-primary-foreground',
        // Variant soft
        'data-[variant="soft"]:bg-secondary',
        'data-[variant="soft"]:hover:bg-secondary/80',
        'data-[variant="soft"]:focus-visible:bg-secondary/80',
        'data-[variant="soft"]:text-secondary-foreground',
        className
      )}
      href={href}
      {...props}
      data-variant={variant}
    />
  )
}

export {Iconlink}

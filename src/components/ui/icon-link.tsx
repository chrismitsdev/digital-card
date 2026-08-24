import {cn} from '@/src/lib/utils'

type IconlinkProps = React.ComponentPropsWithRef<'a'> & {
  'aria-label': string
  variant?: 'primary' | 'soft'
}

function Iconlink({
  'aria-label': ariaLabel,
  className,
  variant = 'primary',
  href,
  ...props
}: IconlinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className={cn(
        'size-8 inline-flex items-center justify-center rounded-full [&>svg]:size-4 sm:size-10 sm:[&>svg]:size-5',
        // Variant
        'data-[variant="primary"]:bg-primary',
        'data-[variant="primary"]:text-primary-foreground',
        'data-[variant="soft"]:bg-secondary',
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

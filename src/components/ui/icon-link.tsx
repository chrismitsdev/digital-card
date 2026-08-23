import {cn} from '@/src/lib/utils'

type IconlinkProps = React.PropsWithChildren<{
  'aria-label': string
  className?: string
  variant?: 'primary' | 'secondary'
  href: string
}>

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
        'size-10 inline-flex items-center justify-center rounded-full',
        [
          'data-[variant="primary"]:bg-primary',
          'data-[variant="primary"]:text-primary-foreground'
        ],
        className
      )}
      href={href}
      {...props}
      data-variant={variant}
      target='_blank'
      rel='noopener'
    />
  )
}

export {Iconlink}

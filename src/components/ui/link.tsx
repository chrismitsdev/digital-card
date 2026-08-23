import {cn} from '@/src/lib/utils'

type LinkProps = Omit<React.ComponentPropsWithRef<'a'>, 'color'> & {
  variant?: 'solid' | 'soft' | 'outline'
}

function Link({
  className,
  variant = 'solid',
  target = '_blank',
  ...props
}: LinkProps) {
  return (
    <a
      className={cn(
        'px-3 block-10 inline-flex justify-center items-center gap-2 text-sm rounded [&>svg]:size-3.5 [&>svg]:shrink-0 sm:px-4 sm:text-base sm:[&>svg]:size-4',
        // Variant
        [
          'data-[variant="solid"]:bg-primary',
          'data-[variant="solid"]:text-primary-foreground'
        ],
        [
          'data-[variant="soft"]:bg-secondary',
          'data-[variant="soft"]:text-secondary-foreground'
        ],
        [
          'data-[variant="outline"]:text-accent',
          'data-[variant="outline"]:border'
        ],
        className
      )}
      target={target}
      rel='noopener'
      {...props}
      data-variant={variant}
    />
  )
}

export {Link}

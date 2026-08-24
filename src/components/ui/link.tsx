import {cn} from '@/src/lib/utils'

type LinkProps = Omit<React.ComponentPropsWithRef<'a'>, 'color'> & {
  variant?: 'solid' | 'soft'
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
        'px-3 block-10 inline-flex justify-center items-center gap-2 text-sm rounded [&>svg]:size-3.5 [&>svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 sm:px-4 sm:text-base sm:[&>svg]:size-4',
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
      target={target}
      rel='noopener'
      {...props}
      data-variant={variant}
    />
  )
}

export {Link}

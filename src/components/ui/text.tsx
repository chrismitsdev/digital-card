import {cn} from '@/src/lib/utils'

type TextProps = React.PropsWithChildren<{
  className?: string
  type?: 'sans' | 'display' | 'script'
  variant?: 'heading' | 'title' | 'paragraph' | 'small'
  color?: 'primary' | 'accent'
}>

export default function Text({
  className,
  type = 'sans',
  variant = 'paragraph',
  color,
  ...props
}: TextProps) {
  return (
    <span
      className={cn(
        'block',
        // Type
        'data-[type="sans"]:font-sans',
        'data-[type="display"]:font-display',
        'data-[type="script"]:font-script',
        // Variant
        'data-[variant="heading"]:text-2xl',
        'data-[variant="heading"]:font-semibold',
        'data-[variant="heading"]:uppercase',
        'data-[variant="heading"]:sm:text-5xl',
        'data-[variant="title"]:uppercase',
        'data-[variant="title"]:font-semibold',
        'data-[variant="title"]:sm:text-lg',
        'data-[variant="paragraph"]:text-sm',
        'data-[variant="paragraph"]:sm:text-base',
        'data-[variant="small"]:text-[10px]',
        'data-[variant="small"]:uppercase',
        'data-[variant="small"]:leading-4',
        'data-[variant="small"]:tracking-wider',
        'data-[variant="small"]:sm:tracking-widest',
        'data-[variant="small"]:sm:text-xs',
        // Color
        'data-[color="primary"]:text-primary',
        'data-[color="accent"]:text-accent',
        className
      )}
      {...props}
      data-type={type}
      data-variant={variant}
      data-color={color}
    />
  )
}

export {Text}

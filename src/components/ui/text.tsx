import {cn} from '@/src/lib/utils'

type TextProps = React.PropsWithChildren<{
  className?: string
  'aria-hidden'?: boolean | 'true' | 'false'
  family?: 'sans' | 'display'
  variant?: 'heading' | 'title' | 'paragraph' | 'small'
  color?: 'primary' | 'accent'
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'small'
}>

export default function Text({
  className,
  'aria-hidden': ariaHidden,
  family = 'sans',
  variant = 'paragraph',
  color,
  as: Comp = 'span',
  ...props
}: TextProps) {
  return (
    <Comp
      aria-hidden={ariaHidden}
      className={cn(
        'block',
        // Family
        family === 'sans' && 'font-sans',
        family === 'display' && 'font-display',
        // Variant
        variant === 'heading' && [
          'text-2xl',
          'font-semibold',
          'uppercase',
          'sm:text-5xl'
        ],
        variant === 'title' && ['uppercase', 'font-semibold', 'sm:text-lg'],
        variant === 'paragraph' && ['text-sm', 'sm:text-base'],
        variant === 'small' && [
          'text-[10px]',
          'uppercase',
          'leading-4',
          'tracking-wider',
          'sm:tracking-widest',
          'sm:text-xs'
        ],
        // Color
        color === 'primary' && 'text-primary',
        color === 'accent' && 'text-accent',
        className
      )}
      {...props}
    />
  )
}

export {Text}

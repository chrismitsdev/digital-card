import {cn} from '@/src/lib/utils'

type ContainerProps = React.PropsWithChildren<{
  className?: string
}>

function Container({className, ...props}: ContainerProps) {
  return (
    <div
      className={cn('container max-inline-3xl', className)}
      {...props}
    />
  )
}

export {Container}

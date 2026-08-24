import {cn} from '@/src/lib/utils'

type AvatarProps = {
  className?: string
  imageSrc: string
  imageAlt: string
}

function Avatar({className, imageSrc, imageAlt}: AvatarProps) {
  return (
    <img
      className={cn(
        'aspect-3/4 max-inline-28 rounded object-cover sm:max-inline-48',
        className
      )}
      src={imageSrc}
      alt={imageAlt}
    />
  )
}

export {Avatar}

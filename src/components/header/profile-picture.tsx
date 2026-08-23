import {cn} from '@/src/lib/utils'

type ProfilePictureProps = {
  className?: string
  src: string
  alt: string
}

function ProfilePicture({className, src, alt}: ProfilePictureProps) {
  return (
    <img
      className={cn(
        'aspect-3/4 max-inline-28 rounded object-cover sm:max-inline-48',
        className
      )}
      src={src}
      alt={alt}
    />
  )
}

export {ProfilePicture}

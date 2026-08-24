import {SiFacebook, SiInstagram} from '@icons-pack/react-simple-icons'
import {GlobeIcon, MapPinIcon} from 'lucide-react'
import {Iconlink} from '@/src/components/ui/icon-link'
import {Text} from '@/src/components/ui/text'

type BusinessProps = React.PropsWithChildren<{
  imageSrc: string
  imageAlt?: string
  title: string
  description: string
  websiteHref?: string
  facebookHref?: string
  instagramHref?: string
  locationHref?: string
}>

function Business({
  imageSrc,
  imageAlt,
  title,
  description,
  websiteHref,
  facebookHref,
  instagramHref,
  locationHref,
  children
}: BusinessProps) {
  return (
    <div className='p-2 grid grid-cols-[auto_1fr] gap-2 border border-accent/25 rounded'>
      <img
        className='inline-24 sm:inline-20'
        src={imageSrc}
        alt={imageAlt || 'Business logo'}
      />
      <div className='space-y-1'>
        <Text variant='title'>{title}</Text>
        <Text>{description}</Text>
        <div className='pt-2 space-x-4'>
          {websiteHref && (
            <Iconlink
              variant='soft'
              aria-label='Visit website (opens in new tab)'
              href={websiteHref}
              target='_blank'
              rel='noopener'
            >
              <GlobeIcon />
            </Iconlink>
          )}
          {facebookHref && (
            <Iconlink
              variant='soft'
              aria-label='Visit facebook page (opens in new tab)'
              href={facebookHref}
              target='_blank'
              rel='noopener'
            >
              <SiFacebook />
            </Iconlink>
          )}
          {instagramHref && (
            <Iconlink
              variant='soft'
              aria-label='Visit instagram page (opens in new tab)'
              href={instagramHref}
              target='_blank'
              rel='noopener'
            >
              <SiInstagram />
            </Iconlink>
          )}
          {locationHref && (
            <Iconlink
              variant='soft'
              aria-label='Visit location (opens in new tab)'
              href={locationHref}
              target='_blank'
              rel='noopener'
            >
              <MapPinIcon />
            </Iconlink>
          )}
        </div>
      </div>
      {children && (
        <div className='col-span-2'>Hello World this is some text</div>
      )}
    </div>
  )
}

export {Business}

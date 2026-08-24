import {SiFacebook, SiInstagram} from '@icons-pack/react-simple-icons'
import {CalendarDaysIcon, GlobeIcon, MapPinIcon} from 'lucide-react'
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
  stayHref?: string
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
  stayHref,
  children
}: BusinessProps) {
  return (
    <div className='p-2 grid grid-cols-[auto_1fr] gap-2 bg-accent/10 rounded sm:gap-4'>
      <img
        className='inline-24 sm:inline-30'
        src={imageSrc}
        alt={imageAlt || 'Business logo'}
      />
      <div className='space-y-1'>
        <Text variant='title'>{title}</Text>
        <Text>{description}</Text>
        <div className='pt-2 space-x-2 sm:pt-4 sm:space-x-4'>
          {websiteHref && (
            <Iconlink
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
              aria-label='Visit location (opens in new tab)'
              href={locationHref}
              target='_blank'
              rel='noopener'
            >
              <MapPinIcon />
            </Iconlink>
          )}
          {stayHref && (
            <Iconlink
              aria-label='Book you stay (opens in new tab)'
              href={stayHref}
              target='_blank'
              rel='noopener'
            >
              <CalendarDaysIcon />
            </Iconlink>
          )}
        </div>
      </div>
      {children && <div className='col-span-2'>{children}</div>}
    </div>
  )
}

export {Business}

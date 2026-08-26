import {SiFacebook, SiInstagram} from '@icons-pack/react-simple-icons'
import {CalendarDaysIcon, GlobeIcon, MapPinIcon} from 'lucide-react'
import {IconLink} from '@/src/components/ui/icon-link'
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
        <Text
          variant='title'
          as='h3'
        >
          {title}
        </Text>
        <Text>{description}</Text>
        <div className='pt-2 space-x-3 sm:pt-4'>
          {websiteHref && (
            <IconLink
              aria-label='Go to website (opens in new tab)'
              href={websiteHref}
              target='_blank'
            >
              <GlobeIcon />
            </IconLink>
          )}
          {facebookHref && (
            <IconLink
              aria-label='Go to Facebook page (opens in new tab)'
              href={facebookHref}
              target='_blank'
            >
              <SiFacebook />
            </IconLink>
          )}
          {instagramHref && (
            <IconLink
              aria-label='Go to Instagram page (opens in new tab)'
              href={instagramHref}
              target='_blank'
            >
              <SiInstagram />
            </IconLink>
          )}
          {locationHref && (
            <IconLink
              aria-label='Go to location in Google Maps (opens in new tab)'
              href={locationHref}
              target='_blank'
            >
              <MapPinIcon />
            </IconLink>
          )}
          {stayHref && (
            <IconLink
              aria-label='Book your stay (opens in new tab)'
              href={stayHref}
              target='_blank'
            >
              <CalendarDaysIcon />
            </IconLink>
          )}
        </div>
      </div>
      {children && <div className='col-span-2'>{children}</div>}
    </div>
  )
}

export {Business}

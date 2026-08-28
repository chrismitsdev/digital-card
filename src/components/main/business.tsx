import {SiFacebook, SiInstagram} from '@icons-pack/react-simple-icons'
import {GlobeIcon, MapPinIcon} from 'lucide-react'
import {IconLink} from '@/src/components/ui/icon-link'
import {Text} from '@/src/components/ui/text'

type BusinessProps = React.PropsWithChildren<{
  imageSrc: string
  title: string
  description: string
  websiteHref?: string
  facebookHref?: string
  instagramHref?: string
  locationHref?: string
}>

function Business({
  imageSrc,
  title,
  description,
  websiteHref,
  facebookHref,
  instagramHref,
  locationHref,
  children
}: BusinessProps) {
  return (
    <div className='p-2 grid grid-cols-[auto_1fr] gap-2 bg-accent/10 rounded shadow sm:gap-y-0'>
      <img
        className='max-inline-20 sm:max-inline-24'
        src={imageSrc}
        alt={`${title} logo`}
      />
      <div className='space-y-1'>
        <Text
          variant='title'
          as='h3'
        >
          {title}
        </Text>
        <Text>{description}</Text>
      </div>
      <div className='col-span-full pt-1 flex justify-end gap-3 sm:pt-0'>
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
        {children}
      </div>
    </div>
  )
}

export {Business}

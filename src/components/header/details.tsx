import {type LucideIcon, MailIcon, MapPinIcon, PhoneIcon} from 'lucide-react'
import {Text} from '@/src/components/ui/text'

type DetailsProps = {
  fullName: string
  title: string
  phone?: string
  email?: string
  location?: string
}

function Details({fullName, title, phone, email, location}: DetailsProps) {
  return (
    <div className='space-y-4 sm:space-y-8'>
      <div className='space-y-1 sm:space-y-2'>
        <Text
          variant='heading'
          family='display'
          as='h1'
        >
          {fullName}
        </Text>
        <Text
          variant='small'
          color='accent'
        >
          {title}
        </Text>
      </div>
      {(phone || email || location) && (
        <div className='space-y-2 sm:space-y-4'>
          {phone && (
            <Info
              icon={PhoneIcon}
              detail={phone}
            />
          )}
          {email && (
            <Info
              icon={MailIcon}
              detail={email}
            />
          )}
          {location && (
            <Info
              icon={MapPinIcon}
              detail={location}
            />
          )}
        </div>
      )}
    </div>
  )
}

function Info({icon: Icon, detail}: {icon: LucideIcon; detail: string}) {
  return (
    <div className='flex items-center gap-x-2'>
      <span className='p-1.25 border rounded-full sm:p-1.75'>
        <Icon className='size-3 sm:size-4' />
      </span>
      <Text>{detail}</Text>
    </div>
  )
}

export {Details}

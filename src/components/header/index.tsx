import {SiWhatsapp} from '@icons-pack/react-simple-icons'
import {MailIcon, MapPinIcon, PhoneIcon, UserIcon} from 'lucide-react'
import {Link} from '@/src/components/ui/link'
import {Text} from '@/src/components/ui/text'
import {ProfileDetails} from './profile-details'
import {ProfileInfo} from './profile-info'
import {ProfilePicture} from './profile-picture'

function Header() {
  return (
    <header className='space-y-8'>
      {/* Abstract */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-1 sm:gap-x-2'>
          <Text variant='small'>People</Text>
          <Text variant='small'>•</Text>
          <Text variant='small'>Brands</Text>
          <Text variant='small'>•</Text>
          <Text variant='small'>Impact</Text>
        </div>
        <Text variant='small'>Alexandroupoli, Greece</Text>
      </div>

      {/* Information */}
      <div className='flex gap-x-4'>
        {/* Profile picture */}
        <ProfilePicture
          className='object-[30%]'
          src='/mokalis.jpg'
          alt='Giorgos Mokalis'
        />
        {/* Profile credentials */}
        <div className='space-y-4 sm:space-y-10'>
          <ProfileDetails
            fullName='George Mokalis'
            title='Founder & Owner'
          />
          {/* Profile contact details */}
          <div className='space-y-2 sm:space-y-4'>
            <ProfileInfo icon={PhoneIcon}>+30 697 343 3980</ProfileInfo>
            <ProfileInfo icon={MailIcon}>mokalis@gmail.com</ProfileInfo>
            <ProfileInfo icon={MapPinIcon}>Alexandroupoli, Greece</ProfileInfo>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
        <Link href='tel:+306973433980'>
          <PhoneIcon />
          <span>Call me</span>
        </Link>
        <Link href='mailto:mokalis@gmail.com'>
          <MailIcon />
          <span>Email me</span>
        </Link>
        <Link href='https://wa.me/306973433980'>
          <SiWhatsapp />
          <span>WhatsApp</span>
        </Link>
        <Link
          href='/contact.vcf'
          download
        >
          <UserIcon />
          <span>Save contact</span>
        </Link>
      </div>
    </header>
  )
}

export {Header}

import {SiWhatsapp} from '@icons-pack/react-simple-icons'
import {MailIcon, PhoneIcon, UserIcon} from 'lucide-react'
import {Link} from '@/src/components/ui/link'
import {Text} from '@/src/components/ui/text'
import {Avatar} from './avatar'
import {Details} from './details'

function Header() {
  return (
    <header className='space-y-6'>
      {/* Abstract */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-1 sm:gap-x-2'>
          <Text variant='small'>Hospitality</Text>
          <Text
            variant='small'
            aria-hidden='true'
          >
            •
          </Text>
          <Text variant='small'>Wellness</Text>
        </div>
        <Text variant='small'>Alexandroupoli, Greece</Text>
      </div>

      {/* Information */}
      <div className='flex gap-x-3'>
        {/* Profile picture */}
        <Avatar
          className='object-[30%]'
          imageSrc='/mokalis.jpg'
          imageAlt='Giorgos Mokalis'
        />
        {/* Profile credentials */}
        <Details
          fullName='George Mokalis'
          title='Founder & Owner'
          phone='+30 697 343 3980'
          email='mokalis@gmail.com'
          location='Alexandroupoli, Greece'
        />
      </div>

      {/* Links */}
      <ul className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
        <li>
          <Link href='tel:+306973433980'>
            <PhoneIcon />
            <span>Call me</span>
          </Link>
        </li>
        <li>
          <Link href='mailto:mokalis@gmail.com'>
            <MailIcon />
            <span>Email me</span>
          </Link>
        </li>
        <li>
          <Link
            href='https://wa.me/306973433980'
            target='_blank'
          >
            <SiWhatsapp />
            <span>WhatsApp</span>
          </Link>
        </li>
        <li>
          <Link
            href='/contact.vcf'
            download='contact.vcf'
          >
            <UserIcon />
            <span>Save contact</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export {Header}

import {ArrowRightIcon} from 'lucide-react'
import {Business} from './business'
import {Intro} from './intro'

function Main() {
  return (
    <main className='space-y-4'>
      <Intro
        supertitle='My Businesses'
        heading='All my brands'
        subtitle='Different experiences, greater possibilities'
      />
      <Business
        imageSrc='/mocca-living.png'
        title='Mocca Living'
        description='Luxury villas by the sea, Agia Paraskevi Alexandroupoli'
        websiteHref='https://www.moccaliving.com/en/accommodation/mocca-sea/sea-dimitra'
        facebookHref='https://www.facebook.com/profile.php?id=61566665200042'
        instagramHref='https://www.instagram.com/moccaliving.premiumstay/?hl=en'
        locationHref='https://maps.app.goo.gl/3Ccjojo3LUXRwucu8'
      >
        <BookStayLink href='https://www.hotelo.gr/en/properties/mocca-living-41'>
          <span>Book your stay</span>
          <ArrowRightIcon className='size-4' />
        </BookStayLink>
      </Business>
      <Business
        imageSrc='/mocca-living.png'
        title='Mocca City'
        description='Premium city apartment, Alexandroupoli Center'
        websiteHref='https://www.moccaliving.com/en/accommodation/mocca-city/city-dimitra'
        facebookHref='https://www.facebook.com/profile.php?id=61566665200042'
        instagramHref='https://www.instagram.com/moccaliving.premiumstay/?hl=en'
        locationHref='https://maps.app.goo.gl/pLsA8svYzYq5Z9GK9'
      >
        <BookStayLink href='https://www.hotelo.gr/en/properties/mocca-living-41'>
          <span>Book your stay</span>
          <ArrowRightIcon className='size-4' />
        </BookStayLink>
      </Business>
      <Business
        imageSrc='/yuppii.png'
        title='Yuppii Luna Park'
        description='Family entertainment & amusement park'
        websiteHref='https://www.yuppii.gr'
        facebookHref='https://www.facebook.com/yuppii.gr/'
        instagramHref='https://www.instagram.com/yuppiilunapark/'
        locationHref='https://maps.app.goo.gl/qUaToewiDSyoCUm57'
      />
      <Business
        imageSrc='/christmas-lighthouse.png'
        title='The Christmas Lighthouse'
        description='Seasonal Christmas park & experience'
        websiteHref='https://www.thechristmaslighthouse.gr/'
        facebookHref='https://www.facebook.com/TheChristmasLighthouseAXD'
        instagramHref='https://www.instagram.com/the.christmas.lighthouse.axd/'
        locationHref='https://maps.app.goo.gl/qUaToewiDSyoCUm57'
      />
      <Business
        imageSrc='/start-pilates.png'
        title='Start Pilates'
        description='Premium pilates equipment & accessories'
        websiteHref='https://www.startpilates.gr/'
        facebookHref='https://www.facebook.com/startpilates.gr'
        instagramHref='https://www.instagram.com/startpilates.gr/'
        locationHref='https://maps.app.goo.gl/ojHo7RfqvHksnUPYA'
      />
    </main>
  )
}

function BookStayLink({
  href,
  children
}: React.PropsWithChildren<{href: string}>) {
  return (
    <a
      className='px-3 block-8 flex justify-center items-center gap-1.5 text-sm rounded-full bg-primary text-primary-foreground active:scale-95 hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary/80 focus-visible:outline-primary sm:px-4 sm:block-10 sm:text-base'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}

export {Main}

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
        locationHref='https://maps.app.goo.gl/L6JEySni2t8jnb5m9'
        stayHref='https://www.hotelo.gr/en/properties/mocca-living-41'
      />
      <Business
        imageSrc='/mocca-living.png'
        title='Mocca City'
        description='Premium city appartment, Alexandroupoli Center'
        websiteHref='https://www.moccaliving.com/en/accommodation/mocca-city/city-dimitra'
        facebookHref='https://www.facebook.com/profile.php?id=61566665200042'
        instagramHref='https://www.instagram.com/moccaliving.premiumstay/?hl=en'
        locationHref='https://maps.app.goo.gl/pLsA8svYzYq5Z9GK9'
        stayHref='https://www.hotelo.gr/en/properties/mocca-living-41'
      />
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
        imageSrc='/start-pilates.jpg'
        title='Start Pilates'
        description='Premium pilates equipment & accessories'
        websiteHref='https://www.startpilates.gr/'
        facebookHref='https://www.facebook.com/startpilates.gr'
        instagramHref='https://www.instagram.com/startpilates.gr/'
        locationHref='https://maps.app.goo.gl/qUaToewiDSyoCUm57'
      />
    </main>
  )
}

export {Main}

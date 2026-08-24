import {SiFacebook, SiInstagram} from '@icons-pack/react-simple-icons'
import {Iconlink} from '@/src/components/ui/icon-link'
import {Text} from '@/src/components/ui/text'
import {WavePattern} from '@/src/components/ui/wave-pattern'

function Footer() {
  return (
    <footer className='-mx-2 -mb-2 sm:-mx-4 sm:-mb-4'>
      <WavePattern
        className='translate-y-px'
        fill='var(--color-primary)'
      />
      <div className='px-4 pb-6 bg-primary text-primary-foreground flex justify-between gap-2'>
        <div className='content-center space-y-1'>
          <Text variant='small'>One vision</Text>
          <Text variant='small'>All our brands</Text>
          <Text variant='small'>Endless experiences</Text>
        </div>
        <div className='inline-px bg-surface' />
        <div className='space-y-1'>
          <Text variant='title'>Follow me</Text>
          <div className='space-x-2'>
            <Iconlink
              variant='soft'
              aria-label='Follow on Facebook (opens in new tab)'
              href='https://www.facebook.com/giwrgos.mokalis'
              target='_blank'
              rel='noopener'
            >
              <SiFacebook />
            </Iconlink>
            <Iconlink
              variant='soft'
              aria-label='Follow on Instagram (opens in new tab)'
              href='https://www.instagram.com/mokalisgiorgos/'
              target='_blank'
              rel='noopener'
            >
              <SiInstagram />
            </Iconlink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export {Footer}

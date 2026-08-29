import {Text} from '@/src/components/ui/text'

type IntroProps = {
  supertitle: string
  heading: string
  subtitle: string
}

function Intro({supertitle, heading, subtitle}: IntroProps) {
  return (
    <div className='pb-2 text-center'>
      <Text
        variant='small'
        color='accent'
      >
        {supertitle}
      </Text>
      <div className='flex items-center gap-4'>
        <div className='block-px bg-accent inline-full' />
        <Text
          className='whitespace-nowrap'
          variant='heading'
          family='display'
          as='h2'
        >
          {heading}
        </Text>
        <div className='block-px bg-accent inline-full' />
      </div>
      <Text
        variant='small'
        color='accent'
      >
        {subtitle}
      </Text>
    </div>
  )
}

export {Intro}

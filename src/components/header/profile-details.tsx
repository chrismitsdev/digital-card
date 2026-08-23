import {Text} from '@/src/components/ui/text'

type ProfileDetailsProps = {
  fullName: string
  title: string
}

function ProfileDetails({fullName, title}: ProfileDetailsProps) {
  return (
    <div className='space-y-1 sm:space-y-2'>
      <Text
        variant='heading'
        type='display'
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
  )
}

export {ProfileDetails}

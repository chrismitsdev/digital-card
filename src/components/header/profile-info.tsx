import type {LucideIcon} from 'lucide-react'
import {Text} from '@/src/components/ui/text'

type ProfileInfoProps = React.PropsWithChildren<{
  icon: LucideIcon
}>

function ProfileInfo({icon: Icon, children}: ProfileInfoProps) {
  return (
    <div className='flex items-center gap-x-2'>
      <span className='p-1.25 border rounded-full sm:p-1.75'>
        <Icon className='size-3 sm:size-4' />
      </span>
      <Text>{children}</Text>
    </div>
  )
}

export {ProfileInfo}

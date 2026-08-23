import {Si1panel} from '@icons-pack/react-simple-icons'
import {Link} from '@/components/ui/link'

export default function App() {
  return (
    <div className='container'>
      <Link href='https://google.com'>
        <Si1panel size={20} />
        Hello World
      </Link>
    </div>
  )
}

App.displayName = 'App'

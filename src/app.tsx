import {Container} from '@/src/components/container'
import {Footer} from '@/src/components/footer'
import {Header} from '@/src/components/header'
import {Main} from '@/src/components/main'

export default function App() {
  return (
    <Container>
      <div className='p-2 bg-surface rounded shadow sm:p-4'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Container>
  )
}

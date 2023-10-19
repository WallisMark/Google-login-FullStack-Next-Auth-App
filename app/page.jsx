import Image from 'next/image'
import UserInfo from './components/UserInfo'

export default function Home() {
  return (
    <main className=' grid place-items-center h-screen -mt-16'>
      <UserInfo/>
    </main>
  )
}

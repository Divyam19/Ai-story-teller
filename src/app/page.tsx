import { Button } from '@/components/ui/button'
import Image from 'next/image'
import dexter from '../assets/d4aad59fad96ff5b2900206f9e8dcc12.jpg'
export default function Home() {
  return (
    <div className='flex h-screen'>
      {/*60 side*/}
      <div className='w-3/5 bg-yellow-400'>
        <Image src={dexter} alt='landingPage image'
        className='h-screen w-full'/>
      </div>
      {/* 40 side */}
      <div className='w-2/5 bg-red-500'></div> 
    </div> 
  )
}

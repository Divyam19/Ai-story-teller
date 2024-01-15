import { Button } from '@/components/ui/button'
import Image from 'next/image'
import dexter from '../assets/d4aad59fad96ff5b2900206f9e8dcc12.jpg'
import Nav from '@/components/Nav'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
export default function Home() {
  return (
    <>
    <div className='flex h-screen'>
      {/*60 side*/}
      <div className='w-3/5 bg-yellow-400'>
        <Image src={dexter} alt='landingPage image'
        className='h-screen w-full'/>
      </div>
      {/* 40 side */}
      <div className='w-2/5 bg-violet-600 flex items-center justify-center'>
        
        <Card className='m-5'>
          <CardHeader>Login/Signup</CardHeader>
          <CardContent>
            <form className=''>
              <label>Email</label>
              <br/>
              <input type='email' className='bg-gray-400'/>
              <br/>
              <br/>
              <label>Password</label>
              <br/>
              <input type='password' className='bg-gray-400'/>
              <br/>
              <div className='flex gap-4 pt-3'>
                <Button type='submit'>Submit</Button>
                <Button type='reset'>Reset</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
      </div> 
    </div>
    </> 
  )
}

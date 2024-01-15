import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dexter from '../assets/d4aad59fad96ff5b2900206f9e8dcc12.jpg';
import Nav from '@/components/Nav';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <div className='flex h-screen'>
        {/* 60% side */}
        <div className='w-3/5 bg-yellow-400'>
          <Image src={dexter} alt='landingPage image' className='h-screen w-full' />
        </div>
        {/* 40% side */}
        <div className='w-2/5 bg-violet-600 flex items-center justify-center'>
          {/* Centered Card */}
          <Card className='m-3 rounded-xl'>
            <CardHeader>Login/Signup</CardHeader>
            <CardContent>
              <form>
                <label>Email</label>
                <br />
                <input type='email' className='bg-gray-400' />
                <br />
                <br />
                <label>Password</label>
                <br />
                <input type='password' className='bg-gray-400' />
                <br />
                <div className='flex gap-4 pt-4 justify-center'>
                  <Button type='submit' className='bg-yellow-400 text-black rounded-xl'>
                    Submit
                  </Button>
                  <Button type='reset' className='bg-yellow-400 text-black rounded-xl'>
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
            <div className='flex justify-center p-2'>
              {/* Added 'flex items-center' to center the button */}
              <Button type='submit' className='bg-yellow-400 text-black rounded-xl'>
                Google
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

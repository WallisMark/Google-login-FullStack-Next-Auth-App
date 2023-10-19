'use client'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut} from 'next-auth/react'

const NavBar = () => {

  const {status} =useSession();
  return (
    <div className='flex justify-between py-5 px-5 m-5 text-gray-700 bg-teal-100 border-t-4 font-bold border-red-900 shadow-2xl '>
      <Link href='/'className='text-2xl italic'>W_Mcoding</Link>
      { status === 'authenticated' ? (
        <button
        onClick={()=>signOut()}
        className=' bg-teal-500  rounded-xl p-2 hover:bg-teal-200 hover:border-b-4 border-red-900'>Sign Out</button>
      ):(
        <button 
        onClick={()=>signIn('google')}
        className=' bg-teal-500  rounded-xl p-2 hover:bg-teal-200 hover:border-b-4 border-red-900'>Sign In</button>
      )
      }
      
    </div>
  )
}

export default NavBar

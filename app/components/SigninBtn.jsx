'use client'
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

const SigninBtn = () => {
  return (
    <div>
      <button onClick={()=>signIn("google")}>
      <Image
      src='/google.png'
      width={400}
      height={400}/>
      Sign in
      </button>
    </div>
  )
}

export default SigninBtn

"use client"

import { signIn } from "next-auth/react"
import Image from 'next/image'

export default function LoginView() {
 return (
  <div className="w-full pt-20 text-center">
   <Image src="/login.svg" alt="Login" width={200} height={200} className="mx-auto my-4" />
   <button
   onClick={() => signIn('google')}
   className="primary"
   >Login
   </button>
  </div>
 )
}
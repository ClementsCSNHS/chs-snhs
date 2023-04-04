import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-4 px-10 w-full text-white z-30 flex justify-center fixed bg-teal-800">
        <div className="flex justify-between items-center grow text-lg">
          Home
          <div className='flex flex-row gap-6'>
            <Link href="/" className='hover:underline underline-offset-2 decoration-2 '>Home</Link>
            <Link href="/" className='hover:underline underline-offset-2 decoration-2 '>Events</Link>
            <Link href="/" className='hover:underline underline-offset-2 decoration-2 '>Points</Link>
            <Link href="/" className='hover:underline underline-offset-2 decoration-2 '>Documents</Link>
            <Link href="/" className='hover:underline underline-offset-2 decoration-2 '>About Us</Link>
          </div>
        </div>
    </nav>
  )
}

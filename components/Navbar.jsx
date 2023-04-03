import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-4 px-6 w-full text-white z-30 flex justify-center fixed">
        <div className="flex justify-between items-center grow font-bold text-lg">
          Home
          <div className='flex flex-row gap-6'>
            <Link href="/" className='hover:underline '>Home</Link>
            <Link href="/">Events</Link>
            <Link href="/">Points</Link>
            <Link href="/">Documents</Link>
            <Link href="/">About Us</Link>
          </div>
        </div>
    </nav>
  )
}

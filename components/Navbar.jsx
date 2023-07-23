import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../assets/Navbar/logo.png'

// FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <div ref={wrapperRef}>
      <nav className="py-6 px-10 w-full text-white text-xl z-30 flex flex-col items-center absolute top lg:bg-transparent bg-gray-900">
        <div className='w-full flex flex-col gap-8'>
          <div className="flex justify-between items-center grow text-lg">
            <Link href="/">
              <Image
                src={logo}
                width={40}
                height={40}
                alt='SNHS logo'
              />
            </Link>
            <div className='lg:flex flex-row gap-6 hidden'>
              <Link href="/" className='hover:underline underline-offset-2 decoration-2 '>Home</Link>
              <Link href="/events" className='hover:underline underline-offset-2 decoration-2 '>Events</Link>
              <Link href="/points" className='hover:underline underline-offset-2 decoration-2 '>Points</Link>
              <Link href="/documents" className='hover:underline underline-offset-2 decoration-2 '>Documents</Link>
              <Link href="/about_us" className='hover:underline underline-offset-2 decoration-2 '>About Us</Link>
            </div>
            <button className='lg:hidden block h-full aspect-square' onClick={() => setOpen(!open)}>
              <FontAwesomeIcon className={`fill-white w-6 h-6 ${open ? 'hidden' : 'block'}`} icon={faBars}></FontAwesomeIcon>
              <FontAwesomeIcon className={`fill-white w-6 h-6 -mt-1 ${open ? 'block' : 'hidden'}`} icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
          <div className={`flex flex-col gap-4 text-lg lg:hidden ${open ? 'block' : 'hidden'}`}>
            <Link href="/" className='hover:underline underline-offset-2 decoration-2 ' onClick={()=>setOpen(!open)}>Home</Link>
            <Link href="/events" className='hover:underline underline-offset-2 decoration-2 ' onClick={()=>setOpen(!open)}>Events</Link>
            <Link href="/points" className='hover:underline underline-offset-2 decoration-2 ' onClick={()=>setOpen(!open)}>Points</Link>
            <Link href="/documents" className='hover:underline underline-offset-2 decoration-2 ' onClick={()=>setOpen(!open)}>Documents</Link>
            <Link href="/about_us" className='hover:underline underline-offset-2 decoration-2 ' onClick={()=>setOpen(!open)}>About Us</Link>

          </div>
        </div>
      </nav>

    </div>
  )
}

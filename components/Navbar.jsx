import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/Navbar/logo.png"

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Alert if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }

  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <div ref={wrapperRef}>
      <nav className="top absolute z-30 flex w-full flex-col items-center bg-gray-900 px-10 py-4 text-xl text-white lg:bg-transparent">
        <div className="flex w-full flex-col gap-8">
          <div className="flex grow items-center justify-between text-lg">
            <Link href="/">
              <Image src={logo} width={40} height={40} alt="SNHS logo" />
            </Link>
            <div className="hidden flex-row gap-3 lg:flex">
              <Link href="/" className="rounded-md px-3 py-2 hover:bg-gray-700">
                Home
              </Link>
              <Link
                href="/events"
                className="rounded-md px-3 py-2 hover:bg-gray-700"
              >
                Events
              </Link>
              <Link
                href="/points"
                className="rounded-md px-3 py-2 hover:bg-gray-700"
              >
                Points
              </Link>
              <Link
                href="/documents"
                className="rounded-md px-3 py-2 hover:bg-gray-700"
              >
                Documents
              </Link>
              <Link
                href="/about_us"
                className="rounded-md px-3 py-2 hover:bg-gray-700"
              >
                About Us
              </Link>
            </div>
            <button
              className="block aspect-square h-full lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon
                className={`h-6 w-6 fill-white ${open ? "hidden" : "block"}`}
                icon={faBars}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className={`-mt-1 h-6 w-6 fill-white ${
                  open ? "block" : "hidden"
                }`}
                icon={faXmark}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div
            className={`flex flex-col gap-4 text-lg lg:hidden ${
              open ? "block" : "hidden"
            }`}
          >
            <Link
              href="/"
              className="rounded-md px-3 py-2 hover:bg-gray-700"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="rounded-md px-3 py-2 hover:bg-gray-700"
              onClick={() => setOpen(!open)}
            >
              Events
            </Link>
            <Link
              href="/points"
              className="rounded-md px-3 py-2 hover:bg-gray-700"
              onClick={() => setOpen(!open)}
            >
              Points
            </Link>
            <Link
              href="/documents"
              className="rounded-md px-3 py-2 hover:bg-gray-700"
              onClick={() => setOpen(!open)}
            >
              Documents
            </Link>
            <Link
              href="/about_us"
              className="rounded-md px-3 py-2 hover:bg-gray-700"
              onClick={() => setOpen(!open)}
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

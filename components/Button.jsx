import React from 'react'

export default function Button({ children }) {
  return (
    <button className='w-fit bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-md py-4 px-12 rounded-lg tracking-widest duration-300'>{children}</button>
  )
}

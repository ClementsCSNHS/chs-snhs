import React from 'react'

export default function Button({ children }) {
  return (
    <button className='bg-teal-500 hover:bg-teal-400 text-white lg:text-2xl text-lg py-4 px-8 rounded-xl'>{children}</button>
  )
}

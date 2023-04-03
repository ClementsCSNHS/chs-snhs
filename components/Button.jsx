import React from 'react'

export default function Button({ children }) {
  return (
    <button className='bg-teal-500 text-white text-3xl py-4 px-8 rounded-xl'>{children}</button>
  )
}

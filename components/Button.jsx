import React from "react"

export default function Button({ children }) {
  return (
    <button className="text-md w-fit rounded-lg bg-cyan-700 px-12 py-4 font-bold tracking-widest text-white duration-300 hover:bg-cyan-800">
      {children}
    </button>
  )
}

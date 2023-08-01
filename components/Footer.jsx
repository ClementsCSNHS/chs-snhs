import React from "react"

export default function Footer() {
  return (
    <div className="flex w-full flex-row justify-between gap-2 bg-slate-950 px-6 py-2">
      <p className="text-sm text-gray-400">
        © 2023 Clements Science National Honor Society
      </p>
      <p className="text-sm text-gray-400">
        Website by{" "}
        <a className="hover:underline" href="https://chscsnhs.netlify.app/">
          Clements CSNHS
        </a>
      </p>
    </div>
  )
}

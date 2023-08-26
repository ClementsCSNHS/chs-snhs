import React from "react"
import Head from "next/head"

export default function documents() {
  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta name="description" content="Clements Constitution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col items-center gap-12 bg-gradient-to-br from-gray-900 to-slate-700 px-6 py-40 text-white">
        <h2 className="text-5xl font-bold md:text-7xl">
          Clements Constitution
        </h2>
        <iframe
          className="h-[700px] w-full max-w-3xl grow"
          src="https://docs.google.com/document/d/e/2PACX-1vTt5qw3-i6oUdgXNxpptHv6A90nMl344IahvNY8epOwHiI6OQHCgaX--tEs36t-D5yZ2XbrqhQpaG5j/pub?embedded=true"
          loading="lazy"
          height={700}
        ></iframe>
      </div>
    </>
  )
}

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

      <div className="flex w-full flex-col items-center gap-12 bg-gradient-to-br from-gray-900 to-slate-700 px-10 py-40 text-white">
        <h2 className="text-7xl font-bold">Clements Constitution</h2>
        <iframe
          className="h-[70vh] w-full max-w-3xl grow"
          src="https://docs.google.com/document/d/e/2PACX-1vTVwNqpaoK5OH6q3V2WnZ3TGi13Lj4uI3cSCnLZvecBhkKCq2KOxRlK071FXWjWEfWKtRAn-EBUU6YK/pub?embedded=true"
        ></iframe>
      </div>
    </>
  )
}

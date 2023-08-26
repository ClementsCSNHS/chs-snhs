import React from "react"
import Head from "next/head"

import Expand from "@/components/Expand"

export default function points() {
  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta
          name="description"
          content="With your faction, you will compete against everyone else for prizes and clout."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col items-center gap-12 bg-gradient-to-br from-gray-900 to-slate-700 px-10 py-40 text-white">
        <h2 className="text-5xl font-bold md:text-7xl">Points!</h2>
        <div className="flex w-full max-w-screen-xl grow flex-col items-center gap-12 text-left">
          <p className="text-xl">
            With your faction, you will compete against everyone else for prizes
            and clout. Games played/activities during club meetings will be with
            your faction. If you've gone to an event but your points don't show
            up below, contact an officer.
          </p>
          <Expand />
          <iframe
            className="h-[500px] w-full grow"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS9LgQjunMj7pJfCooFJ6Mb5iet8cAIq3ikMJIVzjh_86LDCc2kBjjyfEr4xgZAOgsKk5vJG9_oltIY/pubhtml?widget=true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  )
}

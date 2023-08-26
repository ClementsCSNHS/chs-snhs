import React from "react"
import Head from "next/head"

export default function events() {
  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta
          name="description"
          content="Meeting Schedule: Club-wide meetings to be held after school on the 2nd or 3rd Monday of every month."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-col items-center justify-center gap-12 bg-gradient-to-br from-gray-900 to-slate-700 px-6 pb-44 pt-40 text-white">
        <h2 className="text-5xl font-bold md:text-7xl">2022-2023 EVENTS</h2>
        <div className="flex w-full max-w-screen-xl grow flex-col items-center gap-12">
          <p className="text-xl">
            We have many exciting events planned for all of you this year! We
            hope to see you there and participate as much as you can. This page
            serves as a rough guideline to when our meetings and events are
            likely to be, but all the dates are not set in stone.
            <span className="mt-12 block">
              <b>Meeting Schedule: </b>Club-wide meetings to be held after
              school on the 2nd or 3rd Monday of every month.
            </span>
          </p>
          <div className="flex w-full flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="h-full w-full">
              <h3 className="text-center text-5xl">Fall Semester Timeline</h3>
              <ul className="mt-8 text-center text-xl">
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
              </ul>
            </div>
            <div className="h-full w-full">
              <h3 className="text-center text-5xl">Spring Semester Timeline</h3>
              <ul className="mt-8 text-center text-xl">
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className="mb-4">
                  <b>Interest Meeting: </b>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

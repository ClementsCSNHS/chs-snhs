import React from 'react'
import Head from 'next/head'

export default function events() {
  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta name="description" content="Meeting Schedule: Club-wide meetings to be held after school on the 2nd or 3rd Monday of every month." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full bg-gradient-to-br from-gray-900 to-slate-700 text-white px-10 pt-40 pb-36 flex items-center justify-center flex-col gap-12'>
        <h2 className='text-7xl font-bold'>2022-2023 EVENTS</h2>
        <div className='max-w-screen-xl grow w-full flex flex-col items-center gap-12'>
          <p className='text-xl'>We have many exciting events planned for all of you this year!
            We hope to see you there and participate as much as you can. This page serves as a rough guideline to when our meetings and events are likely to be, but all the dates are not set in stone.
            <br /><br /><span className='font-bold'>Meeting Schedule: </span>Club-wide meetings to be held after school on the 2nd or 3rd Monday of every month.</p>
          <div className='w-full flex lg:flex-row flex-col lg:gap-16 gap-12'>
            <div className='w-full h-full'>
              <h3 className='text-5xl text-center'>Fall Semester Timeline</h3>
              <ul className='text-xl text-center mt-8'>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
              </ul>
            </div>
            <div className='w-full h-full'>
              <h3 className='text-5xl text-center'>Spring Semester Timeline</h3>
              <ul className='text-xl mt-8 text-center'>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
                  Thursday September 15th @3:00 p.m. in the DLH
                </li>
                <li className='mb-4'><span className='font-bold'>Interest Meeting: </span>
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

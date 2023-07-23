import { useState } from 'react'
import Head from 'next/head'

// FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function points() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta name="description" content="With your faction, you will compete against everyone else for prizes and clout." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full gap-12 bg-gradient-to-br from-gray-900 to-slate-700 py-40 px-10 flex flex-col items-center text-white'>
        <h2 className='text-7xl font-bold'>Points!</h2>
        <div className='max-w-screen-xl grow w-full flex flex-col items-center gap-12 text-left'>
          <p className='text-xl'>With your faction, you will compete against everyone else for prizes and clout. Games played/activities during club meetings will be with your faction. If you've gone to an event but your points don't show up below, contact an officer. </p>
          <p className='text-xl self-start text-gray-400 hover:cursor-pointer -mt-6'>
            <span onClick={() => { setOpen(!open) }}>
              How many points for competitions?
              <span>
                <FontAwesomeIcon icon={faPlus} className={`h-5 aspect-square text-gray-400 ml-2 ${open ? 'hidden' : 'inline'}`} />
                <FontAwesomeIcon icon={faMinus} className={`h-5 aspect-square text-gray-400 ml-2 ${open ? 'inline' : 'hidden'}`} />
              </span>
            </span>

            {open &&
              <div className='text-xl'>
                <br />Science Bowl: (4 for State, 5 for Nats)
                <br /> Science Olympiad: (3 per competition, 4 for State, 5 for Nats)
                <br /> Google Science Fair: (3 points)
                <br /> Microsoft ImagineCup: (3 points)
                <br /> MIT ZERO: (3 points)
                <br /> Any Hackathon: (3 points)
                <br /> USAPHO, USABO, or USACHO: (3 Points)
                <br /> ACS Chemistry Scholarship Exam:  (3 Points)
                <br /> UIL Science Competitions: (3 for Invitationals and Regionals, 4 for State)
                <br />
                <br />Please report to one of the officers if you have competed in any science competitions.
              </div>
            }
          </p>
          <iframe className='grow w-full max-w-3xl h-[70vh]' src="https://docs.google.com/document/d/e/2PACX-1vTVwNqpaoK5OH6q3V2WnZ3TGi13Lj4uI3cSCnLZvecBhkKCq2KOxRlK071FXWjWEfWKtRAn-EBUU6YK/pub?embedded=true"></iframe>
        </div>
      </div></>
  )
}

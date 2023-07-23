import React from 'react'
import Head from 'next/head'
import Accordion from '@/components/Accordion'

export default function about_us() {
  const items = [
    {
      title: "How do I join SNHS?",
      content:
        <>
          <p>
            It's simple! Just meet the following requirements and we'll send you a letter of admission in the fall.
          </p>
          <p>
            - You must be in 10th, 11th, or 12th grade.
          </p>
          <p>
            - You must have completed or be enrolled in at least one level 2 science course.
          </p>
          <p>
            - The average of all your science grades must be at least 88, and your GPA must be above 3.0.
          </p>
          <p>
            - You can't have violated the Clements Honor Code or have major disciplinary action.
          </p>
        </>
    },
    {
      title: "So why join SNHS?",
      content:
        <>
          <p>
            I'm sure there are different incentives for different people, but hopefully one of the following reasons will appeal to you:
          </p>
          <p>
            - Promoting leadership qualities
          </p>
          <p>
            - Creating positive changes in your community through service
          </p>
          <p>
            - Promoting interest in science
          </p>
        </>
    },
    {
      title: "Plans for the year?",
      content: "We hope to hold meetings in-person with lots of food, interesting lectures, and fun activities, so make sure you come!"
    },
    {
      title: "So what's the whole deal with the point system?",
      content: "We're turning it away from a punishment system into an incentive system. Thus, there will be no more point requirements, but instead earning points will increase your chances of attending the exclusive events that will promote your leadership and personal development."
    },
    {
      title: "How can I be an officer and continue the vision?",
      content: "It's quite simple - meet the point threshold for the position you wish to run for, fill out your application packet, and undergo an interview if necessary. Of course, you'll have to get elected."
    }
  ]

  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta name="description" content="Clements Constitution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full gap-12 bg-gradient-to-br from-gray-900 to-slate-700 py-40 px-10 flex flex-col items-center text-white'>
        <h2 className='text-7xl font-bold'>About Us</h2>
        <div className='max-w-screen-xl grow w-full flex flex-col gap-12 text-xl'>
          <ul>
            <li className='mb-4'><span className='font-bold'>Co-Presidents: </span>
              xxx
            </li>
            <li className='mb-4'><span className='font-bold'>Vice President: </span>
              xxx
            </li>
            <li className='mb-4'><span className='font-bold'>Outreach Coordinators: </span>
              xxx
            </li>
            <li className='mb-4'><span className='font-bold'>Webmaster/Historian: </span>
              xxx
            </li>
            <li className='mb-4'><span className='font-bold'>Volunteering Coordinators: </span>
              xxx
            </li>
            <li><span className='font-bold'>Member Services Coordinator: </span>
              xxx
            </li>
          </ul>
          <p>If you ever have any questions, please message any one of us on Facebook!</p>
          <Accordion items={items} />
        </div>
      </div>
    </>
  )
}

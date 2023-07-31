import Head from "next/head"
import Image from "next/image"
import Button from "@/components/Button"
import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendar,
  faMoneyBill1,
  faRectangleList,
  faUser,
} from "@fortawesome/free-regular-svg-icons"

// images
import AboutBg from "../assets/Home/about_bg.jpg"
import Link from "next/link"

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta
          name="description"
          content="Clements SNHS represents a community of individuals that strive to be the next generation of leaders in industry, science, and research."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* header */}
        <div className="absolute -z-10 h-screen w-full brightness-50">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  // value: "#0f766e",
                  value: "#1e293b",
                },
              },
              fpsLimit: 30,
              interactivity: {
                events: {
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 1,
                  width: 1.5,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1000,
                  },
                  value: 50,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <div className="flex h-screen w-full flex-col items-center justify-center gap-12">
          <h1 className="text-5xl font-bold text-white md:text-7xl lg:text-9xl">
            Clements SNHS
          </h1>
          <Link href="/events">
            <Button>EVENTS &rarr;</Button>
          </Link>
        </div>

        {/* about */}
        <div className='flex w-full items-center justify-end bg-[url("../assets/Home/about_bg.jpg")] bg-cover px-6'>
          <div className="mb-40 mt-40 flex h-full w-full flex-col gap-6 bg-black bg-opacity-75 px-10 py-20 text-white lg:w-1/2 lg:gap-12">
            <h2 className="text-3xl lg:text-5xl">What is Clements SNHS?</h2>
            <p className="text-lg lg:text-xl">
              Clements SNHS represents a community of individuals that strive to
              be the next generation of leaders in industry, science, and
              research. We aim to empower others to lead future innovation
              through academic ventures and community service.
            </p>

            <Link href="/about_us">
              <Button>LEARN MORE &rarr;</Button>
            </Link>
          </div>
        </div>

        {/* updates */}
        <div className="flex w-full items-center justify-center bg-gradient-to-br from-gray-900 to-slate-700 px-10 pt-28 text-white">
          <div className="flex max-w-screen-xl grow flex-row gap-10">
            <div className="flex grow flex-col items-center gap-10">
              <h2 className="mb-8 text-5xl font-semibold tracking-wider lg:text-7xl">
                UPDATES
              </h2>
              <ul className="flex flex-col gap-10 text-left text-lg lg:text-xl">
                <li className="flex items-center gap-10">
                  <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex">
                    <FontAwesomeIcon icon={faCalendar} className="h-14 w-14" />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam ad delectus nulla perspiciatis sapiente assumenda
                    doloremque consectetur, debitis modi dolores iusto tenetur.
                    Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
                <li className="flex items-center gap-10">
                  <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex">
                    <FontAwesomeIcon
                      icon={faRectangleList}
                      className="h-14 w-14"
                    />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam ad delectus nulla perspiciatis sapiente assumenda
                    doloremque consectetur, debitis modi dolores iusto tenetur.
                    Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
                <li className="flex items-center gap-10">
                  <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex">
                    <FontAwesomeIcon
                      icon={faMoneyBill1}
                      className="h-14 w-14"
                    />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam ad delectus nulla perspiciatis sapiente assumenda
                    doloremque consectetur, debitis modi dolores iusto tenetur.
                    Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
                <li className="flex items-center gap-10">
                  <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex">
                    <FontAwesomeIcon icon={faUser} className="h-14 w-14" />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veniam ad delectus nulla perspiciatis sapiente assumenda
                    doloremque consectetur, debitis modi dolores iusto tenetur.
                    Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* sign up */}
        <div className="flex w-full flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-slate-700 py-28 text-white">
          <div className="mb-28 w-11/12 border-t-2 border-white"></div>

          <h2 className="mb-12 text-3xl font-semibold tracking-wider lg:text-5xl">
            Interested?
          </h2>
          <Button>Sign Up! &rarr;</Button>
        </div>
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image';
import Button from '@/components/Button';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMoneyBill1, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';

// images
import AboutBg from '../assets/Home/about_bg.jpg';
import Link from 'next/link';

export default function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <Head>
        <title>Clements SNHS</title>
        <meta name="description" content="Clements SNHS represents a community of individuals that strive to be the next generation of leaders in industry, science, and research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* header */}
        <div className='w-full h-screen absolute -z-10 brightness-50'>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  // value: "#0f766e",
                  value: "#1e293b"
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
        <div className='w-full h-screen flex justify-center items-center flex-col gap-12'>
          <h1 className='text-white font-bold lg:text-9xl md:text-7xl text-5xl'>Clements SNHS</h1>
          <Link href="/events">
          <Button>
            EVENTS &rarr;
          </Button>
          </Link>
        </div>

        {/* about */}
        <div className='bg-[url("../assets/Home/about_bg.jpg")] bg-cover w-full flex items-center justify-end px-6'>
          <div className='bg-black bg-opacity-75 lg:w-1/2 w-full h-full text-white flex flex-col lg:gap-12 gap-6 px-10 py-20 mt-40 mb-40'>
            <h2 className='lg:text-5xl text-3xl'>
              What is Clements SNHS?
            </h2>
            <p className='lg:text-xl text-lg'>Clements SNHS represents a community of individuals that strive to be the next generation of leaders in industry, science, and research. We aim to empower others to lead future innovation through academic ventures and community service.</p>
            <Button>
              LEARN MORE &rarr;
            </Button>
          </div>
        </div>

        {/* updates */}
        <div className='w-full pt-28 px-10 bg-gradient-to-br from-gray-900 to-slate-700 text-white flex justify-center items-center'>
          <div className='max-w-screen-xl grow flex flex-row gap-10'>
            <div className='flex flex-col gap-10 items-center grow'>
              <h2 className='font-semibold lg:text-5xl text-3xl tracking-wider mb-8'>
                UPDATES
              </h2>
              <ul className='lg:text-xl text-lg text-left flex flex-col gap-10'>
                <li className='flex items-center gap-10'>
                  <div className='hidden shrink-0 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex items-center justify-center'>
                    <FontAwesomeIcon icon={faCalendar} className='w-14 h-14' />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ad delectus nulla perspiciatis sapiente assumenda doloremque consectetur, debitis modi dolores iusto tenetur. Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
                <li className='flex items-center gap-10'>
                  <div className='shrink-0 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex hidden items-center justify-center'>
                    <FontAwesomeIcon icon={faRectangleList} className='w-14 h-14' />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ad delectus nulla perspiciatis sapiente assumenda doloremque consectetur, debitis modi dolores iusto tenetur. Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
                <li className='flex items-center gap-10'>
                  <div className='shrink-0 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex hidden items-center justify-center'>
                    <FontAwesomeIcon icon={faMoneyBill1} className='w-14 h-14' />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ad delectus nulla perspiciatis sapiente assumenda doloremque consectetur, debitis modi dolores iusto tenetur. Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
                <li className='flex items-center gap-10'>
                  <div className='shrink-0 w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-teal-600 md:flex hidden items-center justify-center'>
                    <FontAwesomeIcon icon={faUser} className='w-14 h-14' />
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ad delectus nulla perspiciatis sapiente assumenda doloremque consectetur, debitis modi dolores iusto tenetur. Atque neque vel dicta? Ab, dicta alias? Sapiente!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* sign up */}
        <div className='w-full py-28 bg-gradient-to-tr from-gray-900 to-slate-700 text-white flex flex-col justify-center items-center'>
          <div className='w-11/12 border-t-2 border-white mb-28'></div>

          <h2 className='font-semibold lg:text-5xl text-3xl tracking-wider mb-12'>Interested?</h2>
          <Button>
            Sign Up! &rarr;
          </Button>
        </div>
      </main>
    </>
  )
}

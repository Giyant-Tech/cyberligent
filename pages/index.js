import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  heading,
} from "@chakra-ui/react"

export default function Home() {
  return (
    <div >
      <Head>
        <title>Cyber Inteligence</title>
        <meta name="description" content="Not really, butr yeah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[#355B7D]'>
        <nav  className="bg-[#355B7D]	flex justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded-2xl text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              sing in
            </a>
          </div>


          <div className="flex block text-white mr-0">
            <span className="font-semibold text-xl tracking-tight pr-2">cyberligent</span>
            <Image
              className="fill-current h-8 w-8 mr-0"
              src="https://img.icons8.com/color/48/000000/security-configuration.png"
              alt="Next.js logo"
              width={30}
              height={30} />
          </div>
        </nav>

        <section>
          hello Word
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}Two Curios Geeks
        </a>
      </footer>
    </div>
  )
}

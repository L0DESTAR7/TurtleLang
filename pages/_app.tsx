import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Michroma } from '@next/font/google';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';

const NoSSRComponent = dynamic(() => import('components/Navbar'), {
  ssr: false,
});

const michroma = Michroma({
  weight: "400",
  subsets: ['latin'],
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="background-texture">
        <style jsx global>
          {`
          :root {
            --michroma-font: ${michroma.style.fontFamily};
          }
        `}
        </style>
        <NoSSRComponent />
        <Component {...pageProps} />
      </div>
    </>
  )
}

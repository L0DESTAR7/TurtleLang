import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import { DisplayInput } from '../lib/charger_code';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Turtle Playground</title>
          <meta name="description" content="Turtle lang playground" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        </main>
      </div>
    </>
  )
}


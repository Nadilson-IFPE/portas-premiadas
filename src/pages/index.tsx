import Head from 'next/head'
import { Inter } from 'next/font/google'
import Presente from '@/components/Presente'
import Porta from '@/components/Porta'
import PortaModel from '@/model/portamodel'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))


  return (
    <>
      <Head>
        <title>Portas Premiadas</title>
        <meta name="description" content="Portas Premiadas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
      </div>

    </>
  )
}

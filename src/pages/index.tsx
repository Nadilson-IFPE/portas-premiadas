import Head from 'next/head'
import { Inter } from 'next/font/google'
import Presente from '@/components/Presente'
import Porta from '@/components/Porta'
import PortaModel from '@/model/portamodel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const p1 = new PortaModel(1, false, true)
  const p2 = new PortaModel(2)
  const p3 = new PortaModel(3)
  const p4 = new PortaModel(4)
  const p5 = new PortaModel(5)
  const p6 = new PortaModel(6)

  return (
    <>
      <Head>
        <title>Portas Premiadas</title>
        <meta name="description" content="Portas Premiadas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex" }}>
        <Porta porta={p1} />
        <Porta porta={p2} />
        <Porta porta={p3} />
        <Porta porta={p4} />
        <Porta porta={p5} />
        <Porta porta={p6} />
      </div>

    </>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Presente from '@/components/Presente'
import Porta from '@/components/Porta'
import PortaModel from '@/model/portamodel'
import { useState } from 'react'
import { atualizarPortas, criarPortas } from '@/functions/portas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  const [p2, setP2] = useState(new PortaModel(2))
  const [p3, setP3] = useState(new PortaModel(3))
  const [p4, setP4] = useState(new PortaModel(4))
  const [p5, setP5] = useState(new PortaModel(5))
  const [p6, setP6] = useState(new PortaModel(6))

  const [portas, setPortas] = useState(criarPortas(6, 3))

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <>
      <Head>
        <title>Portas Premiadas</title>
        <meta name="description" content="Portas Premiadas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex" }}>
        {renderizarPortas()}
      </div>

    </>
  )
}

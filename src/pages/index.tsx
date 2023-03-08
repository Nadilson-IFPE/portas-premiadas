import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Portas Premiadas</title>
        <meta name="description" content="Portas Premiadas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex" }}>
        <h1>Formulário de Início!!!</h1>
      </div>

    </>
  )
}

import Porta from "@/components/Porta"
import { criarPortas, atualizarPortas } from "@/functions/portas"
import { useState } from "react"
import styles from '@/styles/Jogo.module.css';
import Link from "next/link";


export default function Jogo() {
    const [portas, setPortas] = useState(criarPortas(6, 3))

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}
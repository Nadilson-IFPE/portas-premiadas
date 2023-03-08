import PortaModel from '@/model/portamodel'
import styles from '@/styles/Porta.module.css'
import Presente from './Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function reanderizarPorta() {
        return (
            <div className={styles.porta}>
                Porta
                <div className={styles.numero}>
                    {porta.numero}
                </div>
                <div className={styles.macaneta} onClick={abrir}>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? reanderizarPorta() : porta.temPresente ? <Presente /> : false}
            </div>
            <div className={styles.chao}>
            </div>
        </div>
    )
}
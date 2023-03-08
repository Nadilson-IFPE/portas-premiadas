import styles from "@/styles/Cartao.module.css"
import { ReactNode } from "react"

interface CartaoProps {
    bgcolor?: string
    children?: ReactNode
}

export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? "#FFF"
            }}>
            {props.children}
        </div>
    )
}
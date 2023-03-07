
import PortaModel from '@/model/portamodel';

export function criarPortas(qtdPortas: number, portaSelecionada: number): PortaModel[] {

    return Array.from({ length: qtdPortas }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaSelecionada
        return new PortaModel(numero, temPresente)
    })

}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualPortaModificada = portaAtual.numero === portaModificada.numero

        if (igualPortaModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}


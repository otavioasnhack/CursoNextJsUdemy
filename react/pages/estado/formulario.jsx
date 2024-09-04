import { useState } from "react"

export default function Formulario() {
    const [valor, setValor] = useState('inicial')
    const alterarInput = () => setValor(valor + '!')
    return (
        <div>
            <input type="text" value={valor} onChange={ev => setValor(ev.target.value)}/>
            <button onClick={alterarInput}>Adicionar Exclamação</button>
        </div>
    )
}
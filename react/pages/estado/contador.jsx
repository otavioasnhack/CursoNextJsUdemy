import NumeroDisplay from "@/components/NumeroDisplay"
import { useState } from "react"

export default function Contador() {
    const [numero, setNumero] = useState(0)

    function inc() {
        setNumero(numero + 1)
    } 

    function dec() {
        setNumero(numero - 1)
    }
     
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>Contador</h1>
            <NumeroDisplay display={numero}/>
            <div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            </div>
        </div>
    )
}
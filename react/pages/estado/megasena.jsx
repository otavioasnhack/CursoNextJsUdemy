import { useEffect, useState } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "@/components/NumeroDisplay"

export default function Megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderNumeros() {
        return numeros.map(n => <NumeroDisplay  key={n} display={n} />)
    }
    return (
        <div style={{display: 'flex', 
            alignItems: 'center', 
            flexDirection: 'column'
        }}>
            <h1>Mega Sena</h1>
            <div style={{display: 'flex',}}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={16} value={qtde} onChange={ev => setQtde(ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
            </div>
        </div>
    )
}
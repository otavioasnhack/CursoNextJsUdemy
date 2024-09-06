import { useEffect, useState } from "react"

export default function Questao() {
    
    const [questao, setQuestao] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1')
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])

    function renderResp() {
        if (questao) {
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        } else {
            return false
        }
    }

    return (
        <div>
            <h1>questao</h1>
            <div>
                <span>{questao?.enunciado}</span>
                <ul>
                    {renderResp()}
                </ul>
            </div>
        </div>
    )
}
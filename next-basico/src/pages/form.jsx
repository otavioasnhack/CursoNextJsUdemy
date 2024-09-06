import { useState } from "react"

export default function Form() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [user, setUser] = useState([])

    async function salvarUsuario() {
       await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })

        setNome('')
        setIdade(0)

       const resp = await fetch('/api/form')
       const usuarios = await resp.json()
       setUser(usuarios)

       function renderUsuarios() {
            return user.map((usuario, i) => {
                return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
            })
       }
    }
    return (
        <div>
            <h1>Integrando com API #02</h1>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <input type="number" value={idade} onChange={e => setIdade(+e.target.value)}/>
            <button onClick={salvarUsuario}>Enviar</button>
            <ul>
                {renderUsuarios()} 
            </ul>
            {/* Não chamou a função */}
        </div>
    )
}
function listaFun() {
        const lista = []
        for (let index = 1; index <= 10; index++) {
            lista.push(<span>{index},</span>)
        }
        return lista
    }

export default function lista3() {
    return (
        <div>
            {listaFun()}
        </div>
    )
}
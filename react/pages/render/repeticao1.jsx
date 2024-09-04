export default function repeticao1() {
    const listaAprovados = [
        'Maria',
        'Joao',
        'Ana',
        'Bia',
        'Marcos',
        'Paulo',
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => { return <li key={i}>{nome}</li>})
    }

    return (
        <div>
            {renderizarLista()}
        </div>
    )
}
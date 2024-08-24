export default function jsx4() {
    const subtitulo = 'Estou no JavaScript'

    return (
      <div>
        <h1>jsx #04</h1>
        <p>{subtitulo}</p>
        <p>{entre(10, 13, 11)}</p>
      </div>
    )
}

function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
        return 'sim'
    } else {
        return 'não'
    }
}
import Linha from "@/components/Linha";


export default function tabuleiro() {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '1.5em'}}>Tabuleiro-Dama - Otavio</h1>
            <Linha branca/>
            <Linha />
            <Linha branca/>
            <Linha />
            <Linha branca/>
            <Linha />
            <Linha branca/>
            <Linha />
        </div>
    )
}
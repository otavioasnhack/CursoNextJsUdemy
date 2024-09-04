import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome='Otávio' idade={27}/>
            <Pessoa nome='Nepomuceno'/>
        </div>
    )
}
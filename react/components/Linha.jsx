import Quadrado from "./Quadrado";
import styles from '../styles/Linha.module.css'

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Quadrado branca={props.branca}/>
            <Quadrado branca={!props.branca}/>
            <Quadrado branca={props.branca}/>
            <Quadrado branca={!props.branca}/>
            <Quadrado branca={props.branca}/>
            <Quadrado branca={!props.branca}/>
            <Quadrado branca={props.branca}/>
            <Quadrado branca={!props.branca}/>
        </div>
    )
}
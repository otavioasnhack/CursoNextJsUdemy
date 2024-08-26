import styles from '../styles/Quadrado.module.css'

export default function Quadrado(props) {
    return (
        <div className={styles.quadrado} style={{backgroundColor: props.branca ? '#fff' : '#444'}}>

        </div>
    )
}
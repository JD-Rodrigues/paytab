import styles from "./styles.css"
import spinner from "../../assets/images/spinner.png"

export function Loading(){
    return (
        <div className="spinner">
            <img src={spinner} alt="Tela de carregamento"></img>
        </div>
    )
}
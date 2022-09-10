import styles from "./styles.css"
import spinner from "../../assets/images/spinner.png"

// Tela de carregamento exibida enquanto aguarda a lista de usuários.

export function Loading(){
    return (
        <div className="spinner">
            <img src={spinner} alt="Tela de carregamento"></img>
        </div>
    )
}
import styles from "./styles.css"

export function ModalPay({name, setSelectedUser}) {
    return (
        <div className="modal__pay">
            <header className="modal__pay__header">
                Pagamento para <span className="receiver__name">{name}</span>
            </header>
            <form className="form__pay" action="">
                <input type="number" className="form__input" placeholder="R$ 0,00"/>
                <select className="form__input">
                    <option>Cartão com final 1111</option>
                    <option>Cartão com final 1234</option>
                </select>
                <button className="form__input form__input--submit">Pagar</button>
                <p onClick={()=> setSelectedUser("")} className="back">← Voltar</p>
            </form>
            
        </div>
    )
}
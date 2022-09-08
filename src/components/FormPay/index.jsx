import styles from "./styles.css"

export function FormPay({name, setSelectedUser, setTransactionStatus}) {
    const validCard = "1111111111111111"
    const invalidCard = "4111111111111234"
    const bodyPost = {
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
            destination_user_id: 0,
            value:0
          }
    
    const sendMoney = async () => {
        const selectedCard = document.querySelector(".select__card")
        if (selectedCard.value === validCard) {
            const response = await fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
            {
              method: "POST",
              body: JSON.stringify(bodyPost) 
            })

            const responseJson = await response.json()
            const status = responseJson.status
            console.log(status)
            return status
        } else {
            console.log("Reprovada")
            return "Reprovada"
        }
        
    }
    return (
        <div className="modal__pay__wrapper">
            <header className="modal__pay__header">
                Pagamento para <span className="receiver__name">{name}</span>
            </header> 
            <form className="form__pay" action="">
                <input type="number" className="form__input" placeholder="R$ 0,00"/>
                <select className="form__input select__card">
                    <option>{validCard}</option>
                    <option>{invalidCard}</option>
                </select>
                <button className="form__input form__input--submit" onClick={(e) => {
                        e.preventDefault()
                        setTransactionStatus(sendMoney()) 
                        setSelectedUser("")                         
                    }
                }
                >
                    Pagar 
                </button>
                <p onClick={()=> setSelectedUser("")} className="back">← Voltar</p>
            </form>          
        </div>
    )
}
import styles from "./styles.css"

// Modal de pagamento

export function ModalPay({selectedUser, setSelectedUser, setTransactionStatus, paidValue, setPaidValue}) {
    const validCard = "Cartão com final 1111"
    const invalidCard = "Cartão com final 1234"
    const bodyPost = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: selectedUser.id,
      value:paidValue
  }

    // Verifica se algum valor foi inserido.

    const validateInput = () => {
        const input = document.querySelector(".form__input") 
        if (!input.value) {
            alert("Insira o valor do pagamento!") 
            return false
        } else {
            return true
        }       
    }
    
    // Chama o endpoint de pagamento que aprovará ou reprovará a transação.

    const sendMoney = async (dataPost) => {
        const selectedCard = document.querySelector(".select__card")

        if (selectedCard.value === validCard) {
            const response = await fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
            {
              method: "POST",
              body: JSON.stringify(dataPost) 
            })
            const responseJson = await response.json()
            const status = responseJson.status
            return status
        } else {
            return "Reprovada" 
        }        
    }

    return (
        <div className="modal__pay__wrapper">
            <header className="modal__pay__header">
                Pagamento para <span className="receiver__name">{selectedUser.name}</span>
            </header> 
            <form className="form__pay" action="">
                <input 
                  type="number" 
                  className="form__input" 
                  placeholder="R$ 0,00" 
                  onInput={(e)=>setPaidValue(e.target.value)}
                />
                <select className="form__input select__card">
                  <option>{validCard}</option>
                  <option>{invalidCard}</option>
                </select>
                <button 
                  className="form__input form__input--submit" 
                  onClick = {
                    async (e) => {
                      e.preventDefault()
                      if(validateInput()){                       
                          setTransactionStatus(await sendMoney(bodyPost)) 
                          setSelectedUser("") 
                      }                                                  
                    }
                  }
                >
                  Pagar 
                </button>
                <p 
                  onClick={()=> setSelectedUser("")} 
                  className="back"
                >
                  ← Voltar
                </p>
            </form>          
        </div>
    )
}
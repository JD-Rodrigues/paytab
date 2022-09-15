import styles from "./styles.css"
import { maskNumberPtBr } from "../../lib/maskMoneyPtBr"
import { priceValidation } from "../../lib/maskMoneyPtBr"

// Modal de pagamento

export function ModalPay({selectedUser, setSelectedUser, setTransactionStatus, paidValue, setPaidValue, showHideModals}) {
  const form = document.querySelector(".form__pay")
    const cards = [
      "1111111111111111",
      "4111111111111234"
    ]
    const bodyPost = {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
      destination_user_id: selectedUser.id,
      value:paidValue
  }
    

    //Máscara - recebe o value do input type=text e o reinsere formatado.

    const maskMoney = (e) => {     
      e.target.value = maskNumberPtBr(priceValidation(e.target.value))
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

        if (selectedCard.value === '1111111111111111') {
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
        <>
          <header className="modal__pay__header">
              Pagamento para <span className="receiver__name">{selectedUser.name}</span>
          </header> 
          <form className="form__pay" action="">
              <input 
                type="text" 
                className="form__input" 
                placeholder="R$ 0,00" 
                onInput={(e)=>{
                  maskMoney(e)
                }}
                
              />
              <select className="form__input select__card">
                {cards.map(card => <option key={card} value={card}>Cartão com final {card.substring(12)}</option>)} 
              </select>
              <button 
                className="form__input form__input--submit" 
                onClick = {  
                  async (e) => {
                    e.preventDefault()
                    if(validateInput()){  
                        e.target.disabled = true                
                        setTransactionStatus(await sendMoney(bodyPost)) 
                        setSelectedUser("")
                        showHideModals(document.querySelector("#modal__pay"))
                        showHideModals(document.querySelector("#modal__post__pay"))
                        form.reset()
                        e.target.disabled = false                         
                    }                                                  
                  }
                }
              >
                Pagar 
              </button>
              <span 
                onClick={()=> {
                  setSelectedUser("")
                  showHideModals(document.querySelector("#modal__pay"))
                }} 
                className="back"
              >
                ← Voltar
              </span>
          </form>          
        </>
    )
}
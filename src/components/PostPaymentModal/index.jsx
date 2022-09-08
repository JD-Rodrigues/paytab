import styles from "./styles.css"

export function PostPaymentModal({transactionStatus}) {
    return (
        <div className="modal__pay__wrapper">
            <header className="modal__pay__header">
                Recibo de pagamento
            </header> 
            <article className="post__pay__status">               
                 {
                    transactionStatus === "Aprovada"
                        ? "O pagamento foi concluído com sucesso."
                        : <span>O pagamento <strong>não</strong> foi concluído com  sucesso.</span>  
                 }
            </article>        
        </div>
    )
} 
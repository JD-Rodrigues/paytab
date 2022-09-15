import styles from "./styles.css"

//Modal do extrato de pagamento

export function PostPaymentModal({transactionStatus, setTransactionStatus, showHideModals}) {
    return (
        <>
            <header className="modal__pay__header">
                Recibo de pagamento
            </header> 
            <article className="post__pay__status">               
                {
                    transactionStatus === "Aprovada"
                        ? "O pagamento foi concluído com sucesso."
                        : <span>O pagamento <strong>não</strong> foi concluído com  sucesso.</span>  
                }
                <p 
                    onClick={(e)=>{
                        setTransactionStatus("")
                        showHideModals(document.querySelector("#modal__post__pay"))
                    }} 
                    className="back"
                >
                    ← Voltar
                </p>
            </article>        
        </>
    )
} 
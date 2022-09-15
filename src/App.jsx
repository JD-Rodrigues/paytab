import logo from "./assets/images/pair-of-bills.png"
import "./App.css";
import { useEffect, useState } from "react";
import { User } from "./components/User";
import {Loading} from "./components/Loading"
import { ModalPay } from "./components/ModalPay";
import { PostPaymentModal } from "./components/PostPaymentModal";

function App() {
  let [usersList, setUserslist] = useState([])
  let [selectedUser, setSelectedUser] = useState("")
  let [transactionStatus, setTransactionStatus] = useState("")
  let [paidValue, setPaidValue] = useState("")

  useEffect(()=>{
      fetch("https://run.mocky.io/v3/824b2d3f-47ca-4591-9c35-8c3dec016e69")
        .then(data=>data.json())
        .then(data=> setUserslist(data))
  },[])


  const showHideModals = (modalPath) => {
    modalPath.open ? modalPath.close() : modalPath.showModal();
  }  

  return (
    <div className="app">
      <header className="app__header">        
        <img className="app__logo" src={logo} alt="" ></img>        
        <h1>Paytab</h1>         
      </header>
      <article className="container main">
        <h2 className="users__list__title">
          Usuários
        </h2>
        <h3 className="users__list__subtitle">
          Selecione quem receberá o pagamento
        </h3>
        <ul className="users__list">
          {
            usersList.length > 0 
              ? usersList.map(item=>
                <User 
                  pic={item.img} 
                  name={item.name}  
                  id={item.id} 
                  username={item.username}
                  key={`${item.name}${item.id}`} 
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}  
                  showHideModals = {showHideModals}
                />  
              )
              : <Loading />                   
          }           
        </ul>
        <dialog 
          onClick={(e)=>showHideModals(e.target)} 
          className="dialog dialog__pay" 
          id="modal__pay"
        >
          <ModalPay 
            selectedUser={selectedUser}  
            transactionStatus={transactionStatus} setTransactionStatus={setTransactionStatus} 
            paidValue={paidValue}
            setPaidValue={setPaidValue} 
            showHideModals={showHideModals}
          />
        </dialog>
        <dialog 
          onClick={(e)=>showHideModals(e.target)} 
          className="dialog dialog__post__pay" 
          id="modal__post__pay"
        >
          <PostPaymentModal 
            transactionStatus={transactionStatus}
            showHideModals={showHideModals}
          />  
        </dialog>  
      </article>
      <footer className="footer">
        <p>© 2022 - Desenvolvido por JD Rodrigues</p>
      </footer>
    </div>
  );
}

export default App;

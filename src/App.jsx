import logo from "./pair-of-bills.png"
import "./App.css";
import { useEffect } from "react";
import { User } from "./components/User/index";
import { useState } from "react";

function App() {
  let [usersList, setUserslist] = useState([])
  useEffect(()=>{
      let users = fetch("https://run.mocky.io/v3/824b2d3f-47ca-4591-9c35-8c3dec016e69").then(data=>data.json()).then(data=> setUserslist(data)).then(console.log(typeof usersList))   
  },[])

  return (
    <div className="app">
      <header className="app__header">        
        <div className="app__logo"><img src={logo} ></img></div>
        <div className="app__title"><h1>Paytab</h1></div>        
      </header>
      <article className="container main">
        <h2 className="users__list__title">Usuários</h2>
        <h3 className="users__list__subtitle">Selecione quem receberá o pagamento</h3>
        <ul className="users__list">
          {usersList.map(item=>
            <User pic={item.img} name={item.name} id={item.id} username={item.username}/>                 
          )}          
        </ul>
      </article>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

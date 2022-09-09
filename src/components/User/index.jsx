import styles from "./styles.css"

export function User({pic, name, id, username, setSelectedUser, setTransactionStatus}) {
    return (
        <li className="user">
            <div className="user__profile">                
                <img 
                    className="user__pic " 
                    src={pic} 
                    alt="Foto de perfil do usuário" />
                <div className="user__info__wrapper">
                    <p className="user__name">{name}</p>
                    <p className="user__id__username">
                        ID:{id} - Username:{username}
                    </p>
                </div>                
            </div>
            <button 
                onClick={()=>{
                    setTransactionStatus("")
                    setSelectedUser(name)
                }}                 
                className="user__pay">
                    Pagar
            </button>
        </li>
    )
}
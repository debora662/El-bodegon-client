import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";


const UserList = ({users, aux, setAux}) => {
    return(
        <div>
            {users?.map(user =>{
                return <UserItem
                    name={user.name}
                    email={user.email}
                    pedidos={user.orders}
                    isActive={user.is_Active} 
                    aux={aux} 
                    setAux={setAux}
                />
            })}
        </div>
    )
}
 
export default UserList;
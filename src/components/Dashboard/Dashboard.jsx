import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";
import UserItem from "./UserItem/UserItem";
import UserList from "./UserList/UserList";

const Dashboard = () => {
    const adminData = useSelector(state => state.adminData)
    const {users} = adminData
    const dispatch = useDispatch()
    const [aux, setAux] = useState()
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    useEffect(()=>{
        console.log(users);
        console.log(adminData);
    },[adminData])

    return (
        // <div class="container" style={{height:"100vh",width:"100vw"}}>
        <div style={{height:"100vh",width:"100vw"}}>
            <h2>Dashboard</h2>
            <div class="row h-25 justify-content-evenly bg-warning py-4">
                <div class="col-sm-5 bg-info ">
                    Ingresos Totales
                </div>
                <div class="col-sm-5 bg-info">
                    Ingresos Mensuales
                </div>
            </div>
            <div class="row h-25 justify-content-evenly bg-warning py-4">
                <div class="col-sm-5 bg-info ">
                    Usuarios totales
                </div>
                <div class="col-sm-5 bg-info">
                    Nuevos usuarios
                </div>
            </div>
            <div>
                <h3>Lista de usuarios</h3>
                <UserList users={users} aux={aux} setAux={setAux}/>
            </div>
        </div>
        // </div>
    )
}
 
export default Dashboard;
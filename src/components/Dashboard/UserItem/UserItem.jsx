const UserItem = ({name,email,orders,isActive}) => {
    return (
        <div class="bg-danger" style={{width:"80%"}}>
            <span>{name}</span>
            <span>{email}</span>
            <span>{orders? orders : undefined}</span>
            <span>{isActive? "Activo"  : "Inactivo"}</span>
            <button>Banear usuario</button>
        </div>
    );
}
 
export default UserItem;
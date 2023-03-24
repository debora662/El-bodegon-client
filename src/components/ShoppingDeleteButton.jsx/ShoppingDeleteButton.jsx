import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProducts, saveCarrito } from "../../redux/actions/actions";
import style from "./ShoppingDeleteButton.module.css"

const ShoppingDeleteButton = ({aux, setAux}) => {
    const dispatch = useDispatch()
    const usuarioActual = useSelector(state => state.user)
    const cart = []
    const id = usuarioActual.sub || usuarioActual._id

    const handleDeleteCart = () => {
        setAux(aux + 1)
        console.log(usuarioActual);
        dispatch(saveCarrito({cart, id}))
        dispatch(removeAllProducts())
        localStorage.removeItem('Cart')
    }

    return (  
        <button className={style.borrarCart} onClick={handleDeleteCart}>BORRARTODOOO</button>
    );
}
 
export default ShoppingDeleteButton;
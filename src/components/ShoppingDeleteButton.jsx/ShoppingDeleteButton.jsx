import { useDispatch } from "react-redux";
import { removeAllProducts, saveCarrito } from "../../redux/actions/actions";
import style from "./ShoppingDeleteButton.module.css"

const ShoppingDeleteButton = ({aux, setAux}) => {
    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        setAux(aux + 1)
        dispatch(saveCarrito([]))
        dispatch(removeAllProducts())
    }

    return (  
        <button className={style.borrarCart} onClick={handleDeleteCart}>BORRARTODOOO</button>
    );
}
 
export default ShoppingDeleteButton;
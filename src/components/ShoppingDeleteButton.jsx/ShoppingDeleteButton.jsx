import { useDispatch } from "react-redux";
import { removeAllProducts } from "../../redux/actions/actions";
import style from "./ShoppingDeleteButton.module.css"

const ShoppingDeleteButton = ({aux, setAux}) => {
    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        dispatch(removeAllProducts())
        setAux(aux + 1)
    }

    return (  
        <button className={style.borrarCart} onClick={handleDeleteCart}>BORRARTODOOO</button>
    );
}
 
export default ShoppingDeleteButton;
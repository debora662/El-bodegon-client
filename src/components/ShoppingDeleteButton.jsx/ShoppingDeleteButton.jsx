import { useDispatch } from "react-redux";
import { removeAllProducts, saveCarrito } from "../../redux/actions/actions";

const ShoppingDeleteButton = ({aux, setAux}) => {
    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        setAux(aux + 1)
        dispatch(saveCarrito([]))
        dispatch(removeAllProducts())
    }

    return (  
        <button onClick={handleDeleteCart}>BORRARTODOOO</button>
    );
}
 
export default ShoppingDeleteButton;
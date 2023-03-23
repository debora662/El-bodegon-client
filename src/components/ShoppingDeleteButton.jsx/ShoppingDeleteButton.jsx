import { useDispatch } from "react-redux";
import { removeAllProducts } from "../../redux/actions/actions";

const ShoppingDeleteButton = ({aux, setAux}) => {
    const dispatch = useDispatch()

    const handleDeleteCart = () => {
        dispatch(removeAllProducts())
        localStorage.removeItem('Cart')
        setAux(aux + 1)
    }

    return (  
        <button onClick={handleDeleteCart}>BORRARTODOOO</button>
    );
}
 
export default ShoppingDeleteButton;
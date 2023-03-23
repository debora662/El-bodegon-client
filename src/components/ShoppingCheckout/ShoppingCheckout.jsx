
import { createPayment } from '../../redux/actions/actions';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

const ShoppingCheckout = () => {
    const cart = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.totalPrice)
    const dispatch = useDispatch()


    return (

        <div>

            
        

            <h2>CHECKOUT</h2>
        {cart.map(item => {
            return(
                <div key={item._id}>
                    <p>{item.name} x {item.quantity}  ${item.price * item.quantity}</p>
                    <p>hay  {item.stock}</p>
                </div>
            )
        })}
        <h3>TOTAL: ${totalPrice}</h3>
        <button onClick={async()=>{
            dispatch(createPayment())
        }}>
        Pagar
        </button>
        </div>
    );
}
 
export default ShoppingCheckout;

import { createPayment } from '../../redux/actions/actions';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { useState } from 'react';

const ShoppingCheckout = () => {
    const cart = useSelector(state => state.cart)
    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += (item.price * item.quantity)
    });
    const [total, setTotal] = useState(0)
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
            console.log(cart);
            dispatch(createPayment(cart))
        }}>
        Pagar
        </button>
        </div>
    );
}
 
export default ShoppingCheckout;
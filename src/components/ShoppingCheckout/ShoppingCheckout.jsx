import { useSelector } from "react-redux";

const ShoppingCheckout = () => {
    const cart = useSelector(state => state.cart)
    const totalPrice = useSelector(state => state.totalPrice)

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
        <button onClick={() => console.log({cart, totalPrice})}>PAGAR CON MERCADO PAGO</button>
        </div>
    );
}
 
export default ShoppingCheckout;
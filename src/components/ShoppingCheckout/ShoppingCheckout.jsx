import { createPayment } from '../../redux/actions/actions';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Swal from "sweetalert2"
import { saveCarrito } from '../../redux/actions/actions';

const ShoppingCheckout = () => {
    const cart = useSelector(state => state.cart)
    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += (item.price * item.quantity)
    });
    const user = useSelector(state => state.user)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    const userLogged = useSelector(state => state.user)

    useEffect(()=>{
        handleSaveCarrito(cart)
        console.log("pasoxuseeffect");
      },[totalPrice])
      
      const handleSaveCarrito = (cart) => {
            //   if(userLogged){
                // setAux(aux + 1)
                // console.log(userLogged.sub)
                console.log(cart)
                dispatch(saveCarrito({cart, id: userLogged.sub}))
            //   } else {
            //     alert("login")
            //   }
            }

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
            if(user.name){
                dispatch(createPayment(cart))
            } else {
                return (Swal.fire({
                    title: '<strong>Debes loguearte para confirmar el pedido</strong>',
                    icon: 'info',
                    html: 'Inicia sesion o registrate',
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<Link to="/account/login">Aceptar</Link>',
                    // '<a href="//sweetalert2.github.io">links</a> ' +
                    // 'and other HTML tags'
                  }))
            }
        }}>
        Pagar
        </button>
        </div>
    );
}
 
export default ShoppingCheckout;
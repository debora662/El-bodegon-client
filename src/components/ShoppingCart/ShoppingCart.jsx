import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from "./ShoppingCart.module.css"
import ShoppingItem from '../ShoppingItem/ShoppingItem'
import ShoppingCheckout from '../ShoppingCheckout/ShoppingCheckout'
import ShoppingDeleteButton from '../ShoppingDeleteButton.jsx/ShoppingDeleteButton'
import { saveCarrito, setLocalCarrito, uploadProducts } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)
  const carrito = useSelector(state => state.cart)
  const [aux, setAux] = useState("")
  const dispatch = useDispatch()
  const userLogged = useSelector(state=>state.user)
  const {isLoading, user}=useAuth0()
  useEffect(()=>{
    const localCarrito = JSON.parse(localStorage.getItem('Cart'))
    console.log(localCarrito);
    setAux(aux+1)
    if(!user){
        if(!isLoading){
            console.log(localCarrito);
            dispatch(setLocalCarrito(localCarrito))
        }
    } else {

    }
},[])
  useEffect(()=>{
    console.log(carrito);
  },[carrito])

  if(cart[0]){
    return (
      <div>

    <div className={style.cartContainer}>
      <div>
        {carrito.map( item => {
          return <ShoppingItem
          key={item._id}
          _id={item._id}  
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image?.url? item.image?.url : item.image }
          category={item.category}
          quantity={item.quantity}
          item={item}
          stock={item.stock}
          aux={aux}
          setAux={setAux}
          />
        })}
      </div>
      <ShoppingCheckout className={style.checkout}/>
    </div>
      <ShoppingDeleteButton aux={aux} setAux={setAux} />
    </div>
  ) 
  } else {
    return (
      <div>
        <h2>No hay nada en el carrito</h2>
        <h3>Agrega productos ahora!</h3>
        <Link to="/menu"><button>Ir al menú</button></Link>
      </div>
    )
  }
} 
  


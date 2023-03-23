import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from "./ShoppingCart.module.css"
import ShoppingItem from '../ShoppingItem/ShoppingItem'
import ShoppingCheckout from '../ShoppingCheckout/ShoppingCheckout'
import ShoppingDeleteButton from '../ShoppingDeleteButton.jsx/ShoppingDeleteButton'
import { uploadProducts } from '../../redux/actions/actions'

export const ShoppingCart = () => {
  
  const carrito = useSelector(state => state.cart)
  const [aux, setAux] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    if( carrito.length ) {
        localStorage.setItem('Cart', JSON.stringify(carrito))
    }else if( localStorage.getItem('Cart') ){
        dispatch(uploadProducts(JSON.parse(localStorage.getItem('Cart'))))
        console.log(carrito)
    }
},[carrito])

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
          image={item.image.url? item.image.url : item.image }
          category={item.category}
          rating={item.rating}
          comments={item.comments}
          quantity={item.quantity}
          item={item}
          aux={aux}
          setAux={setAux}
          />
        })}
      </div>
      <ShoppingCheckout className={style.checkout}/>
    </div>
      <ShoppingDeleteButton aux={aux} setAux={setAux}/>
    </div>
  )
}

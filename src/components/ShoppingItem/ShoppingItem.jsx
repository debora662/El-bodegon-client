import style from './ShoppingItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, addProduct, addTotalPrice, reduceTotalPrice, removeManyProducts } from '../../redux/actions/actions'
import { useState } from 'react'

const ShoppingItem = ({_id, image, price, name, quantity, stock, item, aux, setAux}) => {
    

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const handleAddProduct = () =>{
      setAux(aux - 1);
      if(quantity === stock) {
        return alert("NO HAY MAS STOCK!!!")
      }
      dispatch(addProduct(item));
      dispatch(addTotalPrice(item))
      console.log(cart);
    }
    
    const handleRemoveProduct = () =>{
      setAux (aux - 1);
      dispatch(removeProduct(item));
      dispatch(reduceTotalPrice(item))
    }
    
    const handleRemoveManyProducts = () => {
      setAux (aux - 1)
      dispatch(removeManyProducts(item))
    }

    return (
        <div className={style.item}>
            <p>{name}</p>
            <img src={image} alt="" className={style.image} />
            <p> USD {price} </p>
            <div>
        <button onClick={handleRemoveProduct}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAddProduct}>+</button>
        <button onClick={handleRemoveManyProducts}>x</button>
      </div>
        </div>
    )
}
 
export default ShoppingItem;
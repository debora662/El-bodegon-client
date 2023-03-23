import style from './ShoppingItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, addProduct } from '../../redux/actions/actions'
import { useState } from 'react'

const ShoppingItem = ({_id, image, price, name, quantity, item, aux, setAux}) => {
    

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
    const handleAddProduct = () =>{
        setAux(aux - 1);
        dispatch(addProduct(item));
        console.log(cart);
      }
      
      const handleRemoveProduct = () =>{
        setAux (aux - 1);
        dispatch(removeProduct(item));
        console.log(cart);
      }
    
    return (
        <div className={style.item}>
            <p>{name}</p>
            <img src={image} alt="" className={style.image} />
            <p>{price}</p>
            <div>
        <button onClick={handleRemoveProduct}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAddProduct}>+</button>
      </div>
        </div>
    )
}
 
export default ShoppingItem;
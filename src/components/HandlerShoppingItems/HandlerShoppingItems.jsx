import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalPrice, reduceTotalPrice, addProduct, removeProduct, removeManyProducts, saveCarrito } from "../../redux/actions/actions";

const HandlerShoppingItems = ({aux, setAux, id, dish}) => {

  
  const cart = useSelector(state => state.cart)
  const item = cart.find(item => item._id === id)
  const userLogged = useSelector(state => state.user)

    const dispatch = useDispatch()
    const handleAddProduct = () =>{
        setAux(aux + 1);
        if(item){
            if(item.quantity === item.stock) {
              return alert("NO HAY MAS STOCK!!!")
            }}
        dispatch(addProduct(dish));
        dispatch(addTotalPrice(dish));
      }
      
      const handleRemoveProduct = () =>{
        setAux (aux + 1);
        dispatch(removeProduct(dish));
        dispatch(reduceTotalPrice(dish))
      }
    
      const handleRemoveManyProducts = () => {
        setAux (aux + 1)
        dispatch(removeManyProducts(dish))
      }

      const handleSaveCarrito = () => {
        if(userLogged){
          setAux(aux + 1)
          console.log(userLogged.sub)
          console.log(cart)
          dispatch(saveCarrito({cart: [...cart], id: userLogged.sub}))
        } else {
          alert("login")
        }
      }
    return ( 
        <div>
            <button onClick={async () => {
              handleRemoveProduct()
              handleSaveCarrito()
            }
              }>-</button>
            <span>{item?.quantity ? item.quantity : 0}</span>
            <button onClick={()=> {
              handleAddProduct()
              handleSaveCarrito()
              }}>+</button>
            {item?.quantity && <button onClick={()=>{
              handleRemoveManyProducts()
              handleSaveCarrito()
              }}>x</button>}
        </div>
    )
}
 
export default HandlerShoppingItems;
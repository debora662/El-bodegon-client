import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addTotalPrice, reduceTotalPrice, removeProduct, removeManyProducts } from "../../redux/actions/actions";
const Card = ({image, name, id, price, rating, item, _quantity,stock, aux, setAux}) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const quantity = cart.find(item => item._id === id)
 


  const handleAddProduct = () =>{
    setAux(aux + 1);
    if(_quantity === stock) {
      return alert("NO HAY MAS STOCK!!!")
    };
    
    console.log(item);
    dispatch(addProduct(item));
    dispatch(addTotalPrice(item));
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
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <p>{name}</p>
      <Link to ={`/detail/${id}`}>
        <img src={image} alt={name} className={style.card_image} />
      </Link>
      <p>{price} USD</p>

      <p>Rating {rating}</p>
      <div>
        <button onClick={handleRemoveProduct}>-</button>
        <span>{quantity ? quantity.quantity : 0}</span>
        <button onClick={handleAddProduct}>+</button>
        {quantity ? <button onClick={handleRemoveManyProducts}>x</button> : ""}
      </div>
    </div>
  );
};


export default Card;

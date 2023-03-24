import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addTotalPrice, reduceTotalPrice, removeProduct, removeManyProducts, createCarrito } from "../../redux/actions/actions";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
const Card = ({image, name, id, price, rating, _quantity,stock, aux, setAux, item}) => {

  return (
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <p>{name}</p>
      <Link to ={`/detail/${id}`}>
        <img src={image} alt={name} className={style.card_image} />
      </Link>
      <p>{price} USD</p>

      <p>Rating {rating}</p>
      <HandlerShoppingItems dish={item} aux={aux} setAux={setAux} id={id}/>
    </div>
  );
};


export default Card;

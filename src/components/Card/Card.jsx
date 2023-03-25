import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addTotalPrice, reduceTotalPrice, removeProduct, removeManyProducts, createCarrito } from "../../redux/actions/actions";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
const Card = ({image, name, id, price, rating, _quantity,stock, aux, setAux, item}) => {

  return (
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <Link style={{ textDecoration: 'none', color: 'black' }} to ={`/detail/${id}`}>
      <h5 style={{ fontWeight: 'bold', margin: '10px' }} >{name}</h5>
      </Link>
      <Link to ={`/detail/${id}`}>
        <img src={image} alt={name} className={style.card_image} />
      </Link>
      <p style={{ margin: '10px' }} >Price: {price} USD</p>

      <p>Rating {rating}</p>
      <HandlerShoppingItems dish={item} aux={aux} setAux={setAux} id={id}/>
    </div>
  );
};


export default Card;

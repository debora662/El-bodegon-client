
import { Link } from "react-router-dom";
import style from "./Card.module.css";
const Card = ({image, name, id, price, rating}) => {
  
  return (
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <p>{name}</p>
      <Link to ={`/detail/${id}`}>
        <img src={image} alt={name} className={style.card_image} />
      </Link>
      <p>{price} USD</p>

      <p>Rating {rating}</p>
      {/* <p>description: {props.description}</p>
      <p>category: {props.category}</p>
      <p>comments: {props.comments}</p> */}
    </div>
  );
};


export default Card;

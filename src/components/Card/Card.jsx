
import { Link } from "react-router-dom";
import style from "./Card.module.css";
const Card = ({image, name, id}) => {
  
  return (
    <div className={style.card}>
      {/* <p>Id: {id}</p> */}
      <p>Name: {name}</p>
      <Link to ={`/detail/${id}`}>
        <img src={image} alt={name} className={style.card_image} />
      </Link>
      {/* <p>price: {props.price}</p>
      <p>description: {props.description}</p>
      <p>category: {props.category}</p>
      <p>rating: {props.rating}</p>
      <p>comments: {props.comments}</p> */}
    </div>
  );
};


export default Card;

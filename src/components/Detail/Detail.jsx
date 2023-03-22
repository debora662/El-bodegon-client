import axios from "axios";
import React from "react";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getDishesById, removeProduct } from "../../redux/actions/actions";

const Detail = () => {
  const { id } = useParams();
  const detailFood = useSelector(state => state.detail)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const quantity = cart.find(item => item._id === id)
  const [aux, setAux] = useState("")
  useEffect(() => {
    dispatch(getDishesById(id))  
  }, []);


  const handleAddProduct = () =>{
    setAux(aux + 1);
    dispatch(addProduct(detailFood));
    console.log(cart);
  }
  
  const handleRemoveProduct = () =>{
    setAux (aux - 1);
    dispatch(removeProduct(detailFood));
    console.log(cart);
  }

  return (
    <div className={style.detail}>
      {detailFood && (
        <div>
          {/* <p>ID: {detailFood._id}</p> */}
          <p>{detailFood.name}</p>

          <img src={detailFood.image?.url? detailFood.image?.url : detailFood.image } alt={detailFood.name} className={style.detail_img} />
          <p>${detailFood.price} USD</p>
          <p>{detailFood.description}</p>
          <p>{detailFood.category}</p>
          <p>Rating: {detailFood.rating}</p>
          <p>Comments: {detailFood.comments}</p>
        </div>
      )}

      <div>
        <button onClick={handleRemoveProduct}>-</button>
        <span>{quantity ? quantity.quantity : 0}</span>
        <button onClick={handleAddProduct}>+</button>
      </div>

          <Link to={"/menu"}>
            <button className={style.detailButton}>Volver</button>
          </Link>
    </div>
  );
};

export default Detail;





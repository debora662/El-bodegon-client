import axios from "axios";
import React from "react";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [detailFood, setDetailFood] = useState();

  useEffect(() => {
    axios
      .get(`https://el-bodegon-api-ochre.vercel.app/foods/${id}`)
      .then((response) => setDetailFood(response.data)) //yo accedo al id del pokemon a detallar
      .catch((error) => console.error(error));
    
  }, []);
  

  return (
    <div className={style.detail}>
      {detailFood && (
        <div>
          {/* <p>ID: {detailFood._id}</p> */}
          <p>Name: {detailFood.name}</p>
          <img src={detailFood.image} alt={detailFood.name} className={style.detail_img} />
          <p>Price: {detailFood.price}</p>
          <p>Description: {detailFood.description}</p>
          <p>Category: {detailFood.category}</p>
          <p>Rating: {detailFood.rating}</p>
          <p>Comments: {detailFood.comments}</p>
        </div>
      )}
          <Link to={"/menu"}>
            <button className={style.detailButton}>Volver</button>
          </Link>
    </div>
  );
};

export default Detail;





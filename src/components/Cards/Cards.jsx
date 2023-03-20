import style from  "./Cards.module.css"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'

const Cards = () => {

    const pagDishes = useSelector(state => state.pagedDishes)

    useEffect( () => {
      setCardDishes(pagDishes)
    },[pagDishes] )
   
    return (
       <div className={style.Cards}>

      {dishes.map(dish=>{
        return <Card
          id={dish._id}  
          name={dish.name}
          price={dish.price}
          description={dish.description}
          image={dish.image.url? dish.image.url : dish.image }
          category={dish.category}
          rating={dish.rating}
          comments={dish.comments}
        />
      })}
      
    </div>

    )
}

export default Cards
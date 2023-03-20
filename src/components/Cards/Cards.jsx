import style from  "./Cards.module.css"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'
// import { memo } from 'react'
const Cards = () => {

    const pagDishes = useSelector(state => state.pagedDishes)
    // const  [ cardDishes , setCardDishes ] = useState([])

    // useEffect( () => {
    //   setCardDishes(pagDishes)
      
    // },[pagDishes] )
   
    return (
       <div className={style.Cards}>
      {pagDishes?.map( dish =>
        (<Card
          id={dish._id}  
          key={dish._id}  
          name={dish.name}
          price={dish.price}
          description={dish.description}
          image={dish.image}
          category={dish.category}
          rating={dish.rating}
          comments={dish.comments}
        />)
      )}
      
    </div>

    )
}

export default Cards
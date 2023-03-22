import { useState, useEffect } from 'react'
import style from  "./Cards.module.css"
import Card from "../Card/Card"

const Cards = ({slicedDishes}) => {
  const [ rndDishes, setRndDishes ] = useState( slicedDishes )

  useEffect( () => {
    setRndDishes(slicedDishes)
    console.log(rndDishes)
  },[slicedDishes] )
    
   
    return (
       <div className={style.Cards}>

      {rndDishes.map( dish=>{
        return <Card
          key={dish._id}
          id={dish._id}  
          name={dish.name}
          price={dish.price}
          description={dish.description}
          image={dish.image.url? dish.image.url : dish.image }
          category={dish.category}
          rating={dish.rating}
          comments={dish.comments}
        />}
      )}
      
    </div>

    )
      }

export default Cards
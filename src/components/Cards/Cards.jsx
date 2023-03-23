import style from  "./Cards.module.css"
import Card from "../Card/Card"
import { useState } from "react"

const Cards = ({slicedDishes}) => {

    const [aux, setAux] = useState(0)

   
    return (
       <div className={style.Cards}>

      {slicedDishes.map( dish=>{
        return <Card
          key={dish._id}
          id={dish._id}  
          name={dish.name}
          price={dish.price}
          description={dish.description}
          image={dish.image? dish.image.url? dish.image.url : dish.image : ""}
          category={dish.category}
          rating={dish.rating}
          comments={dish.comments}
          item ={dish}
          aux={aux}
          setAux={setAux}
          _quantity={dish.quantity}
          stock={dish.stock}
        />}
      )}
      
    </div>

    )
      }

export default Cards
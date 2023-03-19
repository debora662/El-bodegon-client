import style from  "./Cards.module.css"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
const Cards = () => {
    const asados = useSelector(state=>state.allDishes)
    console.log(asados)
    return (
       <div className={style.Cards}>
      {asados?.map(asado=>{
        return <Card
          id={asado?._id}  
          name={asado.name}
          price={asado.price}
          description={asado.description}
          image={asado.image}
          category={asado.category}
          rating={asado.rating}
          comments={asado.comments}
        />
      })}
      
    </div>
    )
}

export default Cards
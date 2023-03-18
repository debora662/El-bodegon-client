import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Cards = () => {
    const dishes = useSelector(state => state.pagedDishes)
   
    return (
        <div>
            {dishes.map( (dish, i) => <Card key={i} dish={dish}/> )}
        </div>
    )
}

export default Cards
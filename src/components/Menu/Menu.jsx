import CategoryFltr from "../CategoryFltr/CategoryFltr"
import Cards from "../Cards/Cards"
import Pagination from "../Pagination/Pagination"
import Orderings from "../Orderings/Orderings"
import style from "./Menu.module.css"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getCategories } from "../../redux/actions/actions"
const Menu = () => {
    const dispatch = useDispatch();
    const allDishes = useSelector(state => state.allDishes)
    const categories = useSelector(state => state.categories)
    const dishesPerPage = 9
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState("any");
    const lastDishIndex = currentPage * dishesPerPage;
    const firstDishIndex = lastDishIndex - dishesPerPage;
    const currentDishes = allDishes.slice(firstDishIndex, lastDishIndex)

    useEffect(()=>{
        dispatch(getCategories())
        console.log("hola");
        console.log(categories);
    },[])

    useEffect( () => {
        console.log('order')
    },[allDishes] )

    return (
        <div className={style.menu}>
            <h1>Menú</h1>
            <CategoryFltr setCurrentPage={setCurrentPage}/>
            <Orderings setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            <Pagination totalDishes={allDishes.length} 
                dishesPerPage={dishesPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
            {/* <Pagination/> */}
            <Cards slicedDishes={currentDishes}/>
            <Pagination totalDishes={allDishes.length} 
                dishesPerPage={dishesPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
        </div>

    )
}

export default Menu
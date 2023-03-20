import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setFltedDishes } from "../../redux/actions/actions";
import style from "./CategoryFltr.module.css"


const CategoryFltr = () => {

    const categorys = useSelector(state => state.categorys);
    const dishes = useSelector(state => state.allDishes);
    const dispatch = useDispatch();
    const [ catFiltering , setCatFiltering ] = useState('')

    const handleClick = (event) => {
        catFiltering !== event.target.value ? setCatFiltering(event.target.value) : setCatFiltering('')
        dispatch(setFltedDishes( catFiltering === '' ? dishes : dishes.filter( dish => dish.category === catFiltering )))
    }

    useEffect( () => {
        dispatch(setFltedDishes( catFiltering === '' ? dishes : dishes.filter( dish => dish.category === catFiltering )))
    }, [] )
    
    return (
        <div className={style.filter}>
            {categorys.map( (category, i) => <button  onClick={handleClick} value={category.name} key={i} className={style.filterButton}>{category.name}</button> )}
        </div>
    )
}

export default CategoryFltr
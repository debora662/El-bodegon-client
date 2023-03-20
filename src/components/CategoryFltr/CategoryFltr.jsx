import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setFltedDishes } from "../../redux/actions/actions";
import style from "./CategoryFltr.module.css"


const CategoryFltr = () => {

    const categorys = useSelector(state => state.categorys);
    const allDishes = useSelector(state => state.allDishes);
    const dispatch = useDispatch();
    const [ catFiltering, setCatFiltering ] = useState('')

    const handleClick = (event) => {
        if( catFiltering === event.target.value ){
            setCatFiltering('')
        }else{
            setCatFiltering(event.target.value)
        }
    }

    useEffect( () => {
        dispatch(setFltedDishes( catFiltering === '' ? allDishes : allDishes.filter( dish => dish.category === catFiltering )))
    }, [catFiltering] )
    
    return (
        <div className={style.filter}>
            {categorys.map( (category, i) => <button  onClick={handleClick} value={category.name} key={i} className={style.filterButton}>{category.name}</button> )}
        </div>
    )
}

export default CategoryFltr
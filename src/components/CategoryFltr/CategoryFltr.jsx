import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setFltedDishes, setCategory } from "../../redux/actions/actions";
import style from "./CategoryFltr.module.css"


const CategoryFltr = () => {

    const categories = useSelector(state => state.categories);
    const actualCategory = useSelector(state => state.actualCategory)

    const dispatch = useDispatch();


    const handleClick = (event) => {
        if( actualCategory === event.target.value ){
            // console.log(actualCategory);
            console.log(event.target.value);
            dispatch(setCategory('all'))
            dispatch(setFltedDishes('all'))
        }else{
            dispatch(setCategory(event.target.value))
            dispatch(setFltedDishes((event.target.value)))
            console.log(categories);
            console.log(actualCategory);
            console.log("pasa x aca");
        }
    }
    
    return (
        <div className={style.filter}>
            {categories.map( 
                (category, i) => 
                <button  onClick={handleClick} value={category} key={i} className={style.filterButton}>
                    {category}
                </button> )}
        </div>
    )
}

export default CategoryFltr
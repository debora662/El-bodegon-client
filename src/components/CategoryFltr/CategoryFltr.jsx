import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setFltedDishes } from "../../redux/actions/actions";


const CategoryFltr = () => {

    const categorys = useSelector(state => state.categorys);
    const dishes = useSelector(state => state.allDishes);
    const dispatch = useDispatch();
    const [ catFiltering, setCatFiltering ] = useState('')

    const handleClick = (event) => {
        if( catFiltering === event.target.value ){
            setCatFiltering('')
        }else{
            setCatFiltering(event.target.value)
        }
                  
        // dispatch(setFltedDishes( catFiltering === '' ? dishes : dishes.filter( dish => dish.category === catFiltering )))
    }

    useEffect( () => {
        dispatch(setFltedDishes( catFiltering === '' ? dishes : dishes.filter( dish => dish.category === catFiltering )))
    }, [catFiltering] )
    
    return (
        <div>
            {categorys.map( (category, i) => <button style={{ width:'120px', height:'30px' }} onClick={handleClick} value={category.name} key={i} >{category.name}</button> )}
        </div>
    )
}

export default CategoryFltr
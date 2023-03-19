import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setOrderings } from "../../redux/actions/actions"

const Orderings = () => {
    const dispatch = useDispatch()
    const dishes = useSelector( state => state.pagedDishes )
    const [ ordering, setOrdering ] = useState('')

    const handleChange = (event) => {
        setOrdering(event.target.value)
        console.log(ordering)
        if(ordering === 'precioAsc') {
            dispatch(setOrderings(dishes.sort( (x,y) => x.price - y.price)))
        }
        if(ordering === 'precioDes') {
            dispatch(setOrderings(dishes.sort( (x,y) => y.price - x.price)))
        }
        if(ordering === 'RatingAsc') dispatch(setOrderings(dishes.sort( (x,y) => x.rating - y.rating)))
        if(ordering === 'RatingDes') dispatch(setOrderings(dishes.sort( (x,y) => y.rating - x.rating)))
    }



    return (
        <div>
            <label>Selecciona un ordenamiento:</label>
                <select onChange={handleChange} >
                    <option value="precioAsc">Precio &uArr;</option>
                    <option value="precioDec">Precio &dArr;</option>                    
                    <option value="ratingAsc">Rating &uArr;</option>
                    <option value="ratingDec">Rating &dArr;</option>                    
                </select>
        </div>

    )
}

export default Orderings
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { setOrderings } from "../../redux/actions/actions"

const Orderings = () => {
    const dispatch = useDispatch()
    const fltDishes = useSelector( state => state.allDishes )
    const [ ordering, setOrdering ] = useState('')

    const handleChange = (event) => {
        setOrdering(event.target.value)   
    }

    useEffect( () => {
        // console.log(ordering)
        if(ordering === 'precioAsc') {
             dispatch(setOrderings(fltDishes.sort( (x,y) => x.price - y.price)))
        }
        if(ordering === 'precioDes') {
             dispatch(setOrderings(fltDishes.sort( (x,y) => y.price - x.price)))
        }
        if(ordering === 'ratingAsc') {
             dispatch(setOrderings(fltDishes.sort( (x,y) => x.rating - y.rating)))
        }
        if(ordering === 'ratingDes') {
             dispatch(setOrderings(fltDishes.sort( (x,y) => y.rating - x.rating)))
        }
    },[ordering] )



    return (
        <div>
            <label>Selecciona un ordenamiento:</label>
                <select onChange={handleChange} >
                    <option value="">-select-</option>
                    <option value="precioAsc">Precio &uArr;</option>
                    <option value="precioDes">Precio &dArr;</option>                    
                    <option value="ratingAsc">Rating &uArr;</option>
                    <option value="ratingDes">Rating &dArr;</option>                    
                </select>
        </div>

    )
}

export default Orderings
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { useState } from "react";
import { setPagination } from "../../redux/actions/actions";

const Pagination = () => {
    const dishes = useSelector( state => state.allDishes )
    const dispatch = useDispatch()
    let buttons = []
    let rndrDishes = []
    const [ page , setPage ] = useState(0)
    

    for(let i = 1; i <= Math.ceil(dishes.length/9); i++){
        buttons.push(i)
    }

    rndrDishes= dishes.slice(page,(page+9))

    dispatch(setPagination(rndrDishes))
    
    const handlePage = (event) => {
        setPage(event.target.value*9);
    }

    useEffect( () => {
        dispatch(setPagination(rndrDishes))
    }, [page] )
    

    return (
        <div>
            {buttons.map((button,i) => <button value={i} onClick={handlePage} key={i}>{button}</button>)}
        </div>

    )
}

export default Pagination
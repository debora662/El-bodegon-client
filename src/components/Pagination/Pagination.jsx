import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { useState } from "react";
import { setPagination } from "../../redux/actions/actions";
import style from "./Pagination.module.css"

const Pagination = () => {
    const fltedDishes = useSelector( state => state.fltedDishes )
    const dispatch = useDispatch()
    let buttons = []
    let rndrDishes = []
    const [ page , setPage ] = useState(0)
    
    for(let i = 1; i <= Math.ceil(fltedDishes.length/9); i++){
        buttons.push(i)
    }

    rndrDishes= fltedDishes.slice(page,(page+9))

    dispatch(setPagination(rndrDishes))
    
    const handlePage = (event) => {
        setPage(event.target.value*9);
    }
    
    useEffect( () => {        
        dispatch(setPagination(rndrDishes))
    }, [page] )
    
    useEffect( () => {
        console.log('Hola')   
    }, [fltedDishes] )

    return (
        <div>
            {buttons.map((button,i) => <button className={style.pagination} value={i} onClick={handlePage} key={i}>{button}</button>)}
        </div>

    )
}

export default Pagination
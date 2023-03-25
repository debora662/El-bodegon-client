import { useEffect } from 'react';
import HandlerShoppingItems from '../HandlerShoppingItems/HandlerShoppingItems';
import style from './ShoppingItem.module.css'


const ShoppingItem = ({_id, image, price, name, item, aux, setAux}) => {
    useEffect(()=>{
        setAux(aux +1 )
    },[])

    return (
        <div className={style.item}>
            <p>{name}</p>
            <img src={image} alt="" className={style.image} />
            <p> USD {price} </p>
            <HandlerShoppingItems dish={item} aux={aux} setAux={setAux} id={_id}/>
        </div>
    )
}
 
export default ShoppingItem;
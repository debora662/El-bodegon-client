import axios from 'axios'
import { createPayment } from '../../redux/actions/actions';
import { useDispatch } from "react-redux"


const ShoppingCheckout = () => {
    const dispatch = useDispatch()

    return (

        <div>
            CHECKOAAAUTT
            
        <button onClick={async()=>{
            dispatch(createPayment())
        }}>
        Pagar
        </button>
        </div>
    );
}
 
export default ShoppingCheckout;
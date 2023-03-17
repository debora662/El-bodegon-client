import { useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllDishes, getCategorys } from '../../redux/actions/actions';


const Landing = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDishes())
        dispatch(getCategorys())
    }, [dispatch]) 

    const navigate = useNavigate()
    return (
        <div>
            <h1>Landing</h1>
            <button onClick={() => navigate('/home')}>START</button>
        </div>
    )
}

export default Landing
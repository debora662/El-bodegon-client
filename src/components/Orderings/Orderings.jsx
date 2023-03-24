import { useDispatch } from "react-redux"
import { setOrderings } from "../../redux/actions/actions"

const Orderings = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch()
    const handleSort = (e) =>{
        dispatch(setOrderings(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordered by ${e.target.value}`)
    }
    return (
        <select style={{ margin: '20px' }} onChange={e=> handleSort(e)}>
            <option value="any">any</option>
            <option value="Ascendent price">Ascendent price</option>
            <option value="Descendent price">Descendent price</option>
            <option value="Ascendent rating">Ascendent rating</option>
            <option value="Descendent rating">Descendent rating</option>
        </select>
    )
}

export default Orderings
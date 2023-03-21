import { useDispatch } from "react-redux"
import { setOrderings } from "../../redux/actions/actions"

const Orderings = ({setCurrentPage, setOrder}) => {
    const dispatch = useDispatch()
    const handleSort = (e) =>{
        console.log("holaa");
        dispatch(setOrderings(e.target.value))
        console.log(e.target.value);
        setCurrentPage(1)
        setOrder(`Ordered by ${e.target.value}`)
    }
    return (
        <select onChange={e=> handleSort(e)}>
            <option value="any">any</option>
            <option value="Descendent price">Descendent price</option>
            <option value="Ascendent price">Ascendent price</option>
            <option value="Ascendent rating">Ascendent rating</option>
            <option value="Descendent rating">Descendent rating</option>
        </select>
    )
}

export default Orderings
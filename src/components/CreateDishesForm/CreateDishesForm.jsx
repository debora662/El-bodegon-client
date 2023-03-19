import { Link } from "react-router-dom"
const CreateDishesForm = () => {
    return (
        <div>
            <h1>CreateDishesForm</h1>
            <Link to={"/home"}>
            <button>Volver</button>
          </Link>
            
        </div>
    )
}

export default CreateDishesForm
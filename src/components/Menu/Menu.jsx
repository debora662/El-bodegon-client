import CategoryFltr from "../CategoryFltr/CategoryFltr"
import Cards from "../Cards/Cards"
import Pagination from "../Pagination/Pagination"

const Menu = () => {
    return (
        <div>
            <h1>Menu</h1>
            <CategoryFltr/>
            <Pagination/>
            <Cards/>
            <Pagination/>
        </div>

    )
}

export default Menu
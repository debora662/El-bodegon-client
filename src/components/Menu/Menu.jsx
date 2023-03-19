import CategoryFltr from "../CategoryFltr/CategoryFltr"
import Cards from "../Cards/Cards"
import Pagination from "../Pagination/Pagination"
import Orderings from "../Orderings/Orderings"

const Menu = () => {
    return (
        <div>
            <h1>Menu</h1>
            <CategoryFltr/>
            <Orderings/>
            <Pagination/>
            <Cards/>
            <Pagination/>
        </div>

    )
}

export default Menu
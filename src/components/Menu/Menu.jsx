import CategoryFltr from "../CategoryFltr/CategoryFltr"
import Cards from "../Cards/Cards"
import Pagination from "../Pagination/Pagination"
import Orderings from "../Orderings/Orderings"
import style from "./Menu.module.css"

const Menu = () => {
    return (
        <div className={style.menu}>
            <h1>Menú</h1>
            <CategoryFltr/>
            <Orderings/>
            <Pagination/>
            <Cards/>
            <Pagination/>
        </div>

    )
}

export default Menu
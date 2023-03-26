import CategoryFltr from "../CategoryFltr/CategoryFltr"
import Cards from "../Cards/Cards"
import Pagination from "../Pagination/Pagination"
import Orderings from "../Orderings/Orderings"
import style from "./Menu.module.css"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getCategories, setLocalCarrito, saveCarrito } from "../../redux/actions/actions"
import { fontWeight } from "@mui/system"
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
    const dispatch = useDispatch();
    const allDishes = useSelector(state => state.allDishes)
    const categories = useSelector(state => state.categories)
    const cart = useSelector(state => state.cart)
    const userLogged = useSelector(state => state.user)
    const dishesPerPage = 9
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState("any");
    const lastDishIndex = currentPage * dishesPerPage;
    const firstDishIndex = lastDishIndex - dishesPerPage;
    const currentDishes = allDishes.slice(firstDishIndex, lastDishIndex)
    const { isAuthenticated, user, isLoading } = useAuth0();

    // let totalPrice = 0
    // cart.forEach(item => {
    //     totalPrice += (item.price * item.quantity)
    // });

    // useEffect(()=>{
    //     handleSaveCarrito(cart)
    //     console.log("pasoxuseeffect");
    //   },[totalPrice])
      
      const handleSaveCarrito = (cart) => {
            //   if(userLogged){
                // setAux(aux + 1)
                // console.log(userLogged.sub)
                console.log(cart)
                dispatch(saveCarrito({cart, id: userLogged.sub}))
            //   } else {
            //     alert("login")
            //   }
            }

    useEffect(()=>{
        const localCarrito = JSON.parse(localStorage.getItem('Cart'))
        if(!user){
            if(!isLoading){
                console.log(localCarrito);
                dispatch(setLocalCarrito(localCarrito))
            }
        } else {

        }
        dispatch(getCategories())
    },[])

    return (
        <div className={style.menu}>
            <p style={{ fontSize: '50px' }} >Menú</p>
            <CategoryFltr setCurrentPage={setCurrentPage}/>
            <Orderings setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            {/* <Pagination/> */}
            <Cards slicedDishes={currentDishes}/>
            <Pagination totalDishes={allDishes.length} 
                dishesPerPage={dishesPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
        </div>

    )
}

export default Menu
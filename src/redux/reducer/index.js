import { all } from 'axios'
import { GET_ALLDISHES, GET_CATEGORIES, SET_FLTEDDISHES, SET_ORDERINGS, CREATE_DISH, GET_DISHES_BY_NAME, SET_CATEGORY } from '../actions/actions'

const initialState = {
    auxAllDishes: [],
    allDishes: [],
    // fltedDishes: [],
    categories:[],
    actualCategory: ""
}


const reducer = (state = initialState, { type, payload }) => {
    const allDishes = state.auxAllDishes
switch (type) {
    case GET_ALLDISHES:
        return {
           ...state,
           allDishes: payload,
           auxAllDishes: payload 
        }
    case GET_DISHES_BY_NAME:
        return {
            ...state,
            allDishes: payload
        }
    case GET_CATEGORIES:
        return {
           ...state,
           categories: payload 
        }
    case SET_CATEGORY:
        return{...state, actualCategory: payload}

    case SET_FLTEDDISHES:
        const fileteredDishes = payload === "all"
            ? allDishes
            : allDishes.filter(dish => dish.category === payload)
            return {...state, allDishes: fileteredDishes };

    case SET_ORDERINGS:
        return {
           ...state,
           allDishes: payload 
        }
    case CREATE_DISH:
        return {...state}    

    default:
        return state
}
}

export default reducer
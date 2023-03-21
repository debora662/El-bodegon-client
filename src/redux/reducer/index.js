import { GET_ALLDISHES, GET_CATEGORIES, SET_FLTEDDISHES, SET_ORDERINGS, CREATE_DISH, GET_DISHES_BY_NAME, SET_CATEGORY } from '../actions/actions'

const initialState = {
    auxAllDishes: [],
    allDishes: [],
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
        let orderedDishes
        if(payload === "any"){
            orderedDishes = state.allDishes.sort((a,b)=>{
                if(a._id > b._id) {return 1}
                if(b._id > a._id) {return -1}
                return 0 
                }
        )}
        if(payload === "Ascendent price"){
            orderedDishes = state.allDishes.sort((a,b)=>{
                if(a.price > b.price) {return 1}
                if(b.price > a.price) {return -1}
                return 0 
                }
            )}
        if(payload === "Descendent price"){
            orderedDishes = state.allDishes.sort((a,b)=>{
                if(a.price < b.price) {return 1}
                if(b.price < a.price) {return -1}
                return 0 
                }
            )}
        if(payload === "Ascendent rating"){
            orderedDishes = state.allDishes.sort((a,b)=>{
                if(a.price > b.price) {return 1}
                if(b.price > a.price) {return -1}
                return 0 
                }
            )}
        if(payload === "Descendent rating"){
            orderedDishes = state.allDishes.sort((a,b)=>{
                if(a.price < b.price) {return 1}
                if(b.price < a.price) {return -1}
                return 0 
                }
            )}
        return {...state, allDishes: orderedDishes} 

    case CREATE_DISH:
        return {...state}    

    default:
        return state
}
}

export default reducer
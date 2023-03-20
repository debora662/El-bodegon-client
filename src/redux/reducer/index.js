import { GET_ALLDISHES, GET_CATEGORYS, SET_PAGINATION, SET_FLTEDDISHES, SET_ORDERINGS } from '../actions/actions'

const initialState = {
    allDishes: [],
    fltedDishes: [],
    pagedDishes:[],
    categorys:[]
}


const reducer = (state = initialState, { type, payload }) => {
switch (type) {
    case GET_ALLDISHES:
        return {
           ...state,
           allDishes: payload 
        }    
    case GET_CATEGORYS:
        return {
           ...state,
           categorys: payload 
        }    
    case SET_PAGINATION:
        return {
           ...state,
           pagedDishes: payload 
        }    
    case SET_FLTEDDISHES:
        return {
           ...state,
           fltedDishes: payload 
        }    
    case SET_ORDERINGS:
        return {
           ...state,
           fltedDishes: payload 
        }    
    default:
        return state
}
}

export default reducer
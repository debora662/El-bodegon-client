import { GET_ALLDISHES, GET_CATEGORYS, SET_PAGINATION } from '../actions/actions'

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
    default:
        return state
}
}

export default reducer
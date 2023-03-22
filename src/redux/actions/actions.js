import axios from "axios"
export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_DISH_BY_ID = 'GET_DISH_BY_ID'
export const GET_DISHES_BY_NAME = 'GET_DISHES_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_PAGINATION = 'SET_PAGINATION'
export const SET_FLTEDDISHES = 'SET_FLTEDDISHES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ORDERINGS = 'SET_ORDERINGS'
export const CREATE_DISH = 'CREATE_DISH'
export const CREATE_NEW_AUTH0_USER = 'CREATE_NEW_AUTH0_USER'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function getAllDishes () {
    return async (dispatch) => {
      try {
        const response = await axios(`https://el-bodegon-api-ochre.vercel.app/foods`)
        return dispatch({
          type: GET_ALLDISHES,
          payload: response.data
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }

export const getDishesById = (id) => {
  return async function (dispatch) {
      const response = await axios(`https://el-bodegon-api-ochre.vercel.app/foods/${id}`)
      console.log(response.data);
      return dispatch({type: GET_DISH_BY_ID, payload: response.data})
  }
}

export const getDishesByName = (payload) => {
    return async function (dispatch) {
      console.log("funciona");
        const foodsByName = await axios.get(`https://el-bodegon-api-ochre.vercel.app/foods?name=${payload}`);
        return dispatch({type: GET_DISHES_BY_NAME, payload: foodsByName.data})
    }
}

export const createDish = (payload) => {
  try {
      return async function () {
        await axios.post("http://localhost:3001/foods", payload, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      }
  } catch (error) {
    console.log(error.message)
  }
}

  export function getCategories () {
    return async (dispatch) => {
      try {
        const categories = await axios.get(`https://el-bodegon-api-ochre.vercel.app/categories`);       
        const parsedCategories = categories.data.map(category => category.name)
        return dispatch({type: GET_CATEGORIES, payload: parsedCategories})
      } catch (error) {
        throw Error(error)
      }
    }
  }
  
  export function setCategory (category) {
    return async (dispatch) => {
      return dispatch({type: SET_CATEGORY, payload: category})
    }
  }

  export function setFltedDishes (category) {
    return async (dispatch) => {
      try {
        return dispatch({
          type: SET_FLTEDDISHES,
          payload: category
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }
  export function setOrderings (order) {
    return async (dispatch) => {    
      return dispatch({type: SET_ORDERINGS, payload: order})
  }
}

export function createAuth0User (user) {
  return async dispatch => {
    try {
      const {name, nickname, email, sub} = user;
      const newAuth0User = {name, nickname, email, sub}
      await axios.post(`http://localhost:3001/auth0Users`, newAuth0User)

      return dispatch({type:CREATE_NEW_AUTH0_USER, payload:newAuth0User})
    } catch (error) {
      console.log(error);
    }
  }
}

export function addProduct (product) {
  return async dispatch => {
    return dispatch({type: ADD_PRODUCT, payload: product})
  }
}

export function removeProduct (product) {
  return async dispatch => {
    return dispatch({type:REMOVE_PRODUCT, payload: product})
  }
}
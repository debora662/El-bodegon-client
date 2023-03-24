import axios from "axios"
import { async } from "q"
export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_DISH_BY_ID = 'GET_DISH_BY_ID'
export const GET_DISHES_BY_NAME = 'GET_DISHES_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_PAGINATION = 'SET_PAGINATION'
export const SET_FLTEDDISHES = 'SET_FLTEDDISHES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ORDERINGS = 'SET_ORDERINGS'
export const CREATE_DISH = 'CREATE_DISH'
export const CREATE_PAYMENT = 'CREATE_PAYMENT'
// Auth0
export const CREATE_NEW_AUTH0_USER = 'CREATE_NEW_AUTH0_USER'
export const GET_AUTH0_USER_BY_ID = 'GET_AUTH0_USER_BY_ID'
// 
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS'
export const UPLOAD_PRODUCTS = 'UPLOAD_PRODUCTS'

export const ADD_TOTAL_PRICE = 'ADD_TOTAL_PRICE'
export const REDUCE_TOTAL_PRICE = 'REDUCE_TOTAL_PRICE'
export const REMOVE_MANY_PRODUCTS = 'REMOVE_MANY_PRODUCTS'
// CARRITO
export const SAVE_CARRITO = 'SAVE_CARRITO'
export const SET_SAVED_CARRITO = 'SET_SAVED_CARRITO'


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
      await axios.post("https://el-bodegon-api-ochre.vercel.app/foods", payload)
      // ,
      //  {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // })
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const saveCarrito = (payload) => {
  return async function (dispatch) {
    console.log(payload);
    try {
      console.log(payload.id);
      console.log(payload.cart);
      await axios.put(`http://localhost:3001/cart/${payload.id}`, payload.cart)
      console.log("funciona");
  } catch (error) {
    console.log(error.message);
  }}
}

export const setSavedCarrito = (id) => {
  return async function(dispatch) {
    try {
      console.log(id);
      const carrito = await axios.get(`http://localhost:3001/cart/${id}`)
      console.log(carrito.data.items);
      dispatch({type: SET_SAVED_CARRITO, payload: carrito.data.items})
    } catch (error) {
      
    }
  }
} 

export const createPayment = (payload) => {
  try {
      return async function () {            
        await axios.post('http://localhost:3001/payment', payload)       
        .then((res)=>window.location.href= res.data.response.body.init_point)
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

export function uploadProducts (products) {
    return async (dispatch) => {
      try {
        return dispatch({
          type: UPLOAD_PRODUCTS,
          payload: products
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

export function getAuth0User(sub) {
  return async dispatch => {
    try {
      const auth0User = await axios.get(`http://localhost:3001/auth0Users/${sub}`)
      console.log(auth0User.data[0]);
      return dispatch({type: GET_AUTH0_USER_BY_ID, payload: auth0User.data[0]})
    } catch (error) {
      
    }
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

export function removeManyProducts (product) {
  console.log(product);
  return async dispatch => {
    return dispatch({type: REMOVE_MANY_PRODUCTS, payload: product})
  }
}

export function removeAllProducts (product) {
  return async dispatch => {
    return dispatch({type: REMOVE_ALL_PRODUCTS, payload: product})
  }
}

export function addTotalPrice (product) {
  return async dispatch => {
    return dispatch({type: ADD_TOTAL_PRICE, payload: product})
  }
}

export function reduceTotalPrice (product) {
  return async dispatch => {
    return dispatch({type: REDUCE_TOTAL_PRICE, payload: product})
  }
}
import axios from "axios"
export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_DISHES_BY_NAME = 'GET_DISHES_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const SET_PAGINATION = 'SET_PAGINATION'
export const SET_FLTEDDISHES = 'SET_FLTEDDISHES'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_ORDERINGS = 'SET_ORDERINGS'
export const CREATE_DISH = 'CREATE_DISH'



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
      console.log("aaaaaaaaaaa");
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
  export function setOrderings (dishes) {
    console.log(dishes)
    return async (dispatch) => {
      try {
        return dispatch({
          type: SET_ORDERINGS,
          payload: dishes
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }

  
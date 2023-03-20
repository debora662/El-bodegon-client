import axios from "axios"
import DB_CATEGORYS from "../../DB_CATEGORYS"
export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_CATEGORYS = 'GET_CATEGORYS'
export const SET_PAGINATION = 'SET_PAGINATION'
export const SET_FLTEDDISHES = 'SET_FLTEDDISHES'
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
export const createDish = (payload) => {
  try {
    const form = new FormData()
    for (let key in payload){
      form[key] = payload[key]
    }
    console.log(form);
      return async function () {
        const form = new FormData
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

  export function getCategorys () {
    return async (dispatch) => {
      try {
        const response = DB_CATEGORYS
  
        return dispatch({
          type: GET_CATEGORYS,
          payload: response
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }
  
  export function setPagination (dishes) {
    return async (dispatch) => {
      try {
        return dispatch({
          type: SET_PAGINATION,
          payload: dishes
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }
  export function setFltedDishes (dishes) {
    return async (dispatch) => {
      try {
        return dispatch({
          type: SET_FLTEDDISHES,
          payload: dishes
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }
  export function setOrderings (dishes) {
    return async (dispatch) => {
      try {
        console.log(dishes)
        return dispatch({
          type: SET_ORDERINGS,
          payload: dishes
        })
      } catch (error) {
        throw Error(error)
      }
    }
  }

  
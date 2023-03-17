// import axios from "axios"
import DB_DISHES from "../../DB_DISHES"
import DB_CATEGORYS from "../../DB_CATEGORYS"
export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_CATEGORYS = 'GET_CATEGORYS'
export const SET_PAGINATION = 'SET_PAGINATION'



export function getAllDishes () {
    return async (dispatch) => {
      try {
        const response = DB_DISHES
  
        return dispatch({
          type: GET_ALLDISHES,
          payload: response
        })
      } catch (error) {
        throw Error(error)
      }
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

  
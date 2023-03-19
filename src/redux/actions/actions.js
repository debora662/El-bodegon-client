import axios from "axios"
// import DB_DISHES from "../../DB_DISHES"
import DB_CATEGORYS from "../../DB_CATEGORYS"
export const GET_ALLDISHES = 'GET_ALLDISHES'
export const GET_CATEGORYS = 'GET_CATEGORYS'



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

  
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getDishesByName } from '../../redux/actions/actions';
import { useState } from 'react';
import style from "./SearchBar.module.css"

const SearchBar = () => {
    
  const dispatch = useDispatch();
  const [food, setFoods] = useState("")
  
  const handleInputChange = (event) =>{
    event.preventDefault()
    console.log("funciona");
    setFoods(event.target.value)

}

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getDishesByName(food))
    
  }

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search by name" onChange={handleInputChange} value={food}/>
          <button className={style.search} type="submit">Search</button>
      </form>
  )
}

export default SearchBar
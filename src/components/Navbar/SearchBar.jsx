import * as React from 'react';
import { useDispatch } from 'react-redux';
import { getDishesByName } from '../../redux/actions/actions';
import { useState } from 'react';

const SearchBar = () => {
    
  const dispatch = useDispatch();
  // const [dogs, setDogs] = useLocalStorage("text", "")
  const [food, setFoods] = useState("")    
 
      
  // useEffect(()=>{
  //     dispatch(getAllDishes(food))  
  // },[])
  
  const handleInputChange = (event) =>{
    event.preventDefault()
    console.log("funciona");
    setFoods(event.target.value)

}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("funciona");
    dispatch(getDishesByName(food))
  }

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search by name" onChange={handleInputChange} value={food}/>
          <button type="submit">Search</button>
      </form>
  )
}

export default SearchBar
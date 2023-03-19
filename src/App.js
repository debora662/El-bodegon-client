import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import CreateDishesForm from './components/CreateDishesForm/CreateDishesForm';
import MenuContainer from "./components/Menu/MenuContainer"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/createDishesForm" && <Nav />}
      {/* <Nav /> */}
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/detail' element={<Detail/>}/> 
        {/* Mientras no halla la ruta de detail usar esta para mostrar */}
        <Route path='/createDishesForm' element={<CreateDishesForm/>}/>
        <Route exact path='/menu' element={<MenuContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;

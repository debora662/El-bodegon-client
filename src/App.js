import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateDishesForm from './components/CreateDishesForm/CreateDishesForm'


import Menu from './components/Menu/Menu';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/createDishesForm" && <Nav />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/create' element={<CreateDishesForm/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateDishesForm from './components/CreateDishesForm/CreateDishesForm'
import Menu from './components/Menu/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from './components/LoginComponents/Profile/Profile';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import LoginPage from './components/LoginComponents/LoginPage/LoginPage';




function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/create" && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/create' element={<CreateDishesForm />} />
        <Route path='account/login' element={<LoginPage />} />
        <Route path='account' element={<Profile />} />
        <Route path='/cart' element={<ShoppingCart />} />

      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateDishesForm from './components/CreateDishesForm/CreateDishesForm'
import Menu from './components/Menu/Menu';
// /* Importación del componente LoginPage desde el archivo LoginPage.js. */
import User from './components/User/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/LoginComponents/Profile/Profile';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
<<<<<<< HEAD
=======
import LoginPage from './components/LoginComponents/LoginPage/LoginPage';
import { useState } from 'react';
>>>>>>> 7596314b8bf4e2be47c0db02b85b9c7bffcf0765

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  const location = useLocation()
  return (
    <div className="App" style={{
      backgroundColor: isDarkMode ? '#000001' : '#fffbf4',
      color: isDarkMode ? '#fffbf4' : '#000001',
    }}>
      <button onClick={handleModeChange}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {location.pathname !== "/create" && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/create' element={<CreateDishesForm />} />
        <Route path='account/login' element={<LoginPage />} />
        <Route path='account' element={<Profile />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;

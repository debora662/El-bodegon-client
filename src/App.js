import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import CreateDishesForm from "./components/CreateDishesForm/CreateDishesForm";
import Menu from "./components/Menu/Menu";
// /* Importación del componente LoginPage desde el archivo LoginPage.js. */
import User from "./components/User/User";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/LoginComponents/Profile/Profile";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import LoginPage from "./components/LoginComponents/LoginPage/LoginPage";
import { useState } from "react";
import Switch from "react-switch";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSwitchChange = (checked) => {
    setIsDarkMode(checked);
  };

  const location = useLocation();
  return (
    <div
      className="App"
      style={{
        backgroundColor: isDarkMode ? "#000001" : "#fffbf4",
        color: isDarkMode ? "#fffbf4" : "#000001",
        border: isDarkMode ? "1px solid #fffbf4" : "#000001"
      }}
    >
      {/* <button onClick={handleModeChange}>
        {isDarkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
      </button> */}
      <Switch
        onChange={handleSwitchChange}
        checked={isDarkMode}
        onColor="#007bff"
        offColor="#bbb"
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        onHandleColor="#fff"
        offHandleColor="#fff"
        onHandleStyle={{ boxShadow: "none" }}
        offHandleStyle={{ boxShadow: "none" }}
        activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
        aria-label="Switch to toggle between light and dark mode"
        onLabel="Dark"
        offLabel="Light"
      />
      {location.pathname !== "/create" && location.pathname !== "/dashboard" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/create" element={<CreateDishesForm />} />
        <Route path="account/login" element={<LoginPage />} />
        <Route path="account" element={<Profile />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;

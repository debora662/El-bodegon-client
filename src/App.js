import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
// import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import CreateDishesForm from './components/CreateDishesForm/CreateDishesForm';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/' element={<Landing />} />
        {/* <Route exact path='/home' element={<Home />} /> */}
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/createDishesForm' element={<CreateDishesForm />} />
      </Routes>
    </>
  );
}

export default App;

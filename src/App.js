import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import CreateDishesForm from './components/CreateDishesForm/CreateDishesForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/createDishesForm' element={<CreateDishesForm/>}/>
      </Routes>
    </div>
  );
}

export default App;

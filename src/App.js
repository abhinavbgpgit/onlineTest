import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Navbar from './comonents/Navbar'
import Test from './pages/test/Test';


function App() {
  return (
    <div>
   <Navbar/>
<Routes>

<Route path='/' element={<Login/>}></Route>
  <Route  path='/home' element={<Home/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/test' element={<Test/>}></Route>
</Routes>
 </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';


function App() {
  return (
    <div>
   
<Routes>

<Route path='/' element={<Login/>}></Route>
  <Route  path='/home' element={<Home/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
</Routes>
 </div>
  );
}

export default App;

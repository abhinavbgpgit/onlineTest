import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState,  useEffect} from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Navbar from './comonents/Navbar'
import Test from './pages/test/Test';
import TestStart from './pages/test/TestStart';
import Instrunctions from './pages/test/Instrunctions';
import TestOnGo from './pages/test/TestOnGo';
import TestFile from './pages/test/TestFile';
import Result from './pages/test/Result';



function App() {
  const [posts, setPosts] = useState([]);
 const getData = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      fetch("http://localhost:3030/questions", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    };
  
    useEffect(() => {
      getData();
    }, []);
  return (
    
    <div>
   <Navbar/>
<Routes>

<Route path='/' element={<Login/>}></Route>
  <Route  path='/home' element={<Home/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/test' element={<Test/>}></Route>
  <Route path='/test/:id' element={<TestStart/>}></Route>
  <Route path='/instrunctions' element={<Instrunctions/>}></Route>
  <Route path='/testongo/:id' element={<TestOnGo/>}></Route>
  <Route path='/testfile' element={<TestFile/>}></Route>
  <Route path='/result' element={<Result/>}></Route>
</Routes>
 </div>
  );


}

export default App;

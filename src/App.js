import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Navbar from './comonents/Navbar'
import Test from './pages/test/Test';
import TestStart from './pages/test/TestStart';
import Instrunctions from './pages/test/Instrunctions';
import TestOnGo from './pages/test/TestOnGo';



function App() {
 
  return (
    <div>
   <Navbar/>
<Routes>

<Route path='/' element={<Login/>}></Route>
  <Route  path='/home' element={<Home/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/test' element={<Test/>}></Route>
  <Route path='/test/:id' element={<TestStart/>}></Route>
</Routes>
 </div>
  );


}

export default App;

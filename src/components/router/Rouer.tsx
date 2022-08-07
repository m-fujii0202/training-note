import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Timer from '../Timer';
import Graph from '../Graph';
import Home from '../Home';
import Login from '../Login';
import Logout from '../Logout';
import Menu from '../Menu';


const Rouer = (props:any) => {
  const {setIsAuth} = props;

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/setting' element={<Menu/>}></Route>
          <Route path='/timer' element={<Timer/>}></Route>
          <Route path='/graph' element={<Graph />}></Route>
          <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}></Route>
          <Route path='/logout' element={<Logout setIsAuth={setIsAuth}/>}></Route>
        </Routes>
    </div>
  )
}

export default Rouer
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Timer from '../Timer';
import Graph from '../Graph';
import Home from '../Home';
import Login from '../Login';
import Logout from '../Logout';
import Setting from '../Setting';


const Rouer = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/setting' element={<Setting/>}></Route>
          <Route path='/timer' element={<Timer/>}></Route>
          <Route path='/graph' element={<Graph />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
    </div>
  )
}

export default Rouer
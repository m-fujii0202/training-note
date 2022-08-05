import React from 'react';
import { BrowserRouter as Rrouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Setting from './components/Setting';
import Login from './components/Login';
import Logout from './components/Logout';
import Graph from './components/Graph';
import Timer from './Timer';
import Navbar from './Navbar';

function App() {
  return (
      <Rrouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/setting' element={<Setting/>}></Route>
          <Route path='/timer' element={<Timer/>}></Route>
          <Route path='/graph' element={<Graph />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
        <Navbar />
      </Rrouter>
  );
}

export default App;

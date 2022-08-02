import React from 'react';
import { BrowserRouter as Rrouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
      <Rrouter>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' element={<Page1/>}></Route>
        <Route path='/' element={<Page2 />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/' element={<Logout />}></Route>

        </Routes>
      </Rrouter>
  );
}

export default App;

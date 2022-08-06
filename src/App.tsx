import React, { useState } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Rouer from './components/router/Rouer';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
      <BrowserRouter>
        <div className='App'>
        <Navbar/>
        <Rouer isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Footer isAuth={isAuth}/>
        </div>
      </BrowserRouter>
  );
}


export default App;

import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/Footer';
import Rouer from './components/router/Rouer';

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
        <Rouer/>
        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;

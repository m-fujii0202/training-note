import { Routes, Route } from 'react-router-dom';
import Timer from '../components/pages/Timer';
import Graph from '../components/pages/Graph';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Logout from '../components/pages/Logout';
import Menu from '../components/Menu/Menus';


//
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
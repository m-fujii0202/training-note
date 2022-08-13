import React from 'react'
import { signInWithPopup, signOut} from "firebase/auth";
import { auth,provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = (props:any) => {
  const {setIsAuth} = props;
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  };

  return (
    <div>
      <p>ログインアウトする</p>
       <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout;
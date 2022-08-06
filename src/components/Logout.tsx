import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = (props:any) => {
  const {setIsAuth} = props;
  const navigate = useNavigate();
  const logout = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result)=>{
      //ローカルストレージに認証を残す機能
      localStorage.setItem("isAuth","true");
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインアウトする</p>
       <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout;
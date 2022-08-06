import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPenToSquare, faChartArea, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

const Footer = (props:any) => {
  const {isAuth} = props;
  return (
    <SFooter>
        <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
        <Link to="/setting">
        <FontAwesomeIcon icon={faPenToSquare} />
        メニュー
        </Link>
        <Link to="/graph">
        <FontAwesomeIcon icon={faChartArea} />
          グラフ
        </Link> 
        {!isAuth ? (
        <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />  
          ログイン
        </Link>
        ) : (
          <Link to="/logout">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />  
          ログアウト
        </Link>
        )}
        
    </SFooter>
  )
}

const SFooter = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: rgb(109, 199, 91);
&.a {
    text-decoration: none;
    color: #fff;
    transition: all 0.3s;
}
& a:hover{
    color: coral;
}
`

export default Footer
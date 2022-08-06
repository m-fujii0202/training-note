import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Footer = () => {
  return (
    <SFooter>
        <Link to="/">Home</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/graph">Graph</Link>
        <Link to="/login">Login</Link>
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
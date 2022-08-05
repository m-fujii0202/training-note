import React from 'react'
import { Link } from 'react-router-dom'
import "./Fotter.css";

const Footer = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/graph">Graph</Link>
        <Link to="/login">Login</Link>
    </nav>
  )
}

export default Footer
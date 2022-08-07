import React from 'react'
import styled from 'styled-components'

 

const Navbar = () => {
  return (
    <Snav>
       <h1>トレーニングノート</h1> 
    </Snav>
  )
}

const Snav = styled.nav`
    display: flex;
    width: 100%;
    justify-content:center;
    align-items: center;
    height: 50px;
    background-color: rgb(109, 199, 91);
`

export default Navbar
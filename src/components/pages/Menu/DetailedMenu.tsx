import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DetailedMenu  = (props:any) => {
  const {setMenu,menu} = props;
  

  const onAddMenu = ()=>{
    // console.log("メニューの追加");
    const newMenu ={
      menuname:"新しいメニュー"
    }
    setMenu(newMenu);
  }

  return (
    <SdetailMenu>
    <SMenuLists>
      <div className='menuList'>
        <button>{menu.name}</button>
      </div>

      <div className='menuList'>
        <button>{menu.name}</button>
      </div>

      <div className='addMenu'>
        <button onClick={onAddMenu}>追加</button>
      </div>
    </SMenuLists>

    <SVolumeContainer>
      <div className='lastTimeVolume'>
        <p>前回のボリュームです</p>
      </div>

      <div className='NextTimeVolume'>
        <p>目標のボリュームです</p>
      </div>
    </SVolumeContainer>
  </SdetailMenu>
  )
}

const SdetailMenu = styled.div`
  height: 70%;
`

const SMenuLists = styled.div`
display: flex;
flex-direction: column;
`

const SVolumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`
export default DetailedMenu 
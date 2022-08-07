import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Menu = () => {

const [menu, setMenu] = useState([
  {chest:["ベンチプレス","ダンベルプレス","プッシュアップ"]},
  {back:["チンニング","デッドリフト","ベントオーバーローイング"]},
  {leg:["スクワット","レッグプレス","レッグエクステンション"]},
  {abdomen:["クランチ","レッグレイズ","サイドクランチ"]},
  {arm:["ダンベルカール","バーベルカール","ハンマーカール"]}
])

useEffect(()=>{
  localStorage.setItem("menu", JSON.stringify(menu));
},[menu])

  return (
    <SContainer>
      <h2>トレーニングメニュー</h2>
        <div className='menusContainer'>
          <SBodycontainer>
            <Sp>胸部</Sp>
            <Sp>背部</Sp>
            <Sp>脚部</Sp>
            <Sp>腹部</Sp>
            <Sp>腕部</Sp>  
          </SBodycontainer>
          
          <div className='detailMenu'>
            <SMenuList>
              <button>ベンチプレス</button>
              <button>ダンベルプレス</button>
            </SMenuList>

            <SVolumeContainer>
              <div className='lastTimeVolume'>
                <p>前回のボリュームです</p>
              </div>

              <div className='NextTimeVolume'>
                <p> 目標のボリュームです</p>
              </div>

            </SVolumeContainer>
          </div>

        </div>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const SBodycontainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Sp = styled.p`
background-color: aqua;
padding: 20px;
`

const SMenuList = styled.div`
display: flex;
flex-direction: column;
`

const SVolumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`

export default Menu;
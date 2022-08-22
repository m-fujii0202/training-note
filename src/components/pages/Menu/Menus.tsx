import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DetailedMenu from './DetailedMenu';

const Menu = () => {
  const [value, setValue] = useState("胸");

  const [menu, setMenu] = useState([
    {chest:["ベンチプレス","ダンベルプレス","プッシュアップ"]},
    {back:["チンニング","デッドリフト","ベントオーバーローイング"]},
    {leg:["スクワット","レッグプレス","レッグエクステンション"]},
    {abdomen:["クランチ","レッグレイズ","サイドクランチ"]},
    {arm:["ダンベルカール","バーベルカール","ハンマーカール"]}
  ])
  
  
  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
    console.log(menu[0]);
  }, [menu, value]);

  
const onChangeMenu = ()=>{
  //ローカルストレージから任意のデータをとってくる機能
  console.log("部位を選択");
  const ChangeMenuData = localStorage.getItem("menu");
  console.log(ChangeMenuData);
}

  return (
    <SContainer>
      <div className='title'>
       <h2>トレーニングメニュー</h2>
      </div>
        <div className='menusContainer'>
          <SBodycontainer>
          <Sbutton onClick={(e) => {setValue("chest")}}>胸部</Sbutton>
          <Sbutton onClick={(e) => {setValue("back")}}>背部</Sbutton>
          <Sbutton onClick={(e) => {setValue("leg")}}>脚部</Sbutton>
          <Sbutton onClick={(e) => {setValue("abdomen")}}>腹部</Sbutton>
          <Sbutton onClick={(e) => {setValue("arm")}}>腕部</Sbutton>
          </SBodycontainer>
          
          <DetailedMenu setMenu={setMenu} menu={menu}/>

        </div>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%
`

const SBodycontainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Sbutton = styled.button`
background-color: aqua;
padding: 20px;
`



export default Menu;
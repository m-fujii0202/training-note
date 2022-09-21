import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailedMenu from "./DetailMenu";

const Menu = () => {
  const [value, setValue] = useState(0);

  const [menus, setMenus] = useState([
    ["ベンチプレス", "ダンベルプレス", "プッシュアップ"],
    ["チンニング", "デッドリフト", "ベントオーバーローイング"],
    ["スクワット", "レッグプレス", "レッグエクステンション"],
    ["クランチ", "レッグレイズ", "サイドクランチ"],
    ["ダンベルカール", "バーベルカール", "ハンマーカール"],
  ]);

  //①部位の配列
  const siteList = ["胸部", "背部", "脚部", "腹部", "腕部"];

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menus));
    // console.log("value", value);
    // console.log(menus[value]);
  }, [menus, value]);

  //メニューを削除する関数
  // const onDeleteMenu = (index:any)=>{
  //   console.log('削除');
  //   console.log(index);
  //   //filter関数を使用し、menuのindexと選択したindexが等しいものを削除するロジック
  //   const filterMenus = menus.filter((menu) => menu[value] !== index);
  //   setMenus(filterMenus);
  // }

  const onDeleteMenu = (index: number)=>{
    const newMenus = [...menus];
    newMenus.splice(index,1);
    setMenus(newMenus);
   //  alert(index);
   }

  return (
    <SContainer>
      <div className="title">
        <h2>トレーニングメニュー</h2>
      </div>

      <div className="menusContainer">
        <SBodycontainer>
          {/* 
          ②部位の配列を展開し、siteListの一つ一つをsiteとする　
          ③展開したsiteにindex(番号）を割り振り、keyとする
          ④menu[value]でしてした番号とindex番号が等しい時activeとなる　${value === index && "active"}
          */}
          {siteList.map((site: string, index) => (
            <Sbutton
              className={`${value === index && "active"}`}
              key={index}
              onClick={(e) => {
                setValue(index);
              }}
            >
              {site}
            </Sbutton>
          ))}
          {/* TODO：値によってボタンの色を切り替える */}
        </SBodycontainer>

        <DetailedMenu menus={menus[value]} setMenus={setMenus} siteList={siteList} onDeleteMenu={onDeleteMenu}/>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
`;

const SBodycontainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Sbutton = styled.button`
  background-color: aqua;
  padding: 20px;

  &:hover {
    cursor: pointer;
  }
  &.active {
    background-color: #e3aa0d;
  }
`;

export default Menu;

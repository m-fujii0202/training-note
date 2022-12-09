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

  const onDeleteMenu = (index: number) => {
    const newMenus = [...menus];
    newMenus[value].splice(index, 1);
    setMenus(newMenus);
  };

  return (
    <SContainer>
      <div className="title">
        <h2>トレーニングメニュー</h2>
      </div>

      <div className="menusContainer">
        <SBodycontainer>
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

        </SBodycontainer>

        <DetailedMenu 
          menus={menus} 
          setMenus={setMenus} 
          siteList={siteList} 
          onDeleteMenu={onDeleteMenu}
          value={value}
          />
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

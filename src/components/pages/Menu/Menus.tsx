import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailedMenu from "./DetailedMenu";

const Menu = () => {
  const [value, setValue] = useState(0);

  const [menu, setMenu] = useState([
    ["ベンチプレス", "ダンベルプレス", "プッシュアップ"],
    ["チンニング", "デッドリフト", "ベントオーバーローイング"],
    ["スクワット", "レッグプレス", "レッグエクステンション"],
    ["クランチ", "レッグレイズ", "サイドクランチ"],
    ["ダンベルカール", "バーベルカール", "ハンマーカール"],
  ]);
  const siteList = ["胸部", "背部", "脚部", "腹部", "腕部"];

  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
    console.log("value", value);
    console.log(menu[value]);
  }, [menu, value]);

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
          {/* TODO：値によってボタンの色を切り替える */}
        </SBodycontainer>

        <DetailedMenu menu={menu[value]} setMenu={setMenu} />
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

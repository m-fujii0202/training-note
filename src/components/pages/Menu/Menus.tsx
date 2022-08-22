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

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
    console.log("value", value);
    console.log(menu[value]);
  }, [menu, value]);

  const onChangeMenu = () => {
    //ローカルストレージから任意のデータをとってくる機能
    console.log("部位を選択");
    const ChangeMenuData = localStorage.getItem("menu");
    console.log(ChangeMenuData);
  };

  return (
    <SContainer>
      <div className="title">
        <h2>トレーニングメニュー</h2>
      </div>
      <div className="menusContainer">
        <SBodycontainer>
          {/* TODO：値によってボタンの色を切り替える */}
          <Sbutton
            onClick={(e) => {
              setValue(0);
            }}
          >
            胸部
          </Sbutton>
          <Sbutton
            onClick={(e) => {
              setValue(1);
            }}
          >
            背部
          </Sbutton>
          <Sbutton
            onClick={(e) => {
              setValue(2);
            }}
          >
            脚部
          </Sbutton>
          <Sbutton
            onClick={(e) => {
              setValue(3);
            }}
          >
            腹部
          </Sbutton>
          <Sbutton
            onClick={(e) => {
              setValue(4);
            }}
          >
            腕部
          </Sbutton>
        </SBodycontainer>

        <DetailedMenu menu={menu[value]} />
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
`;

export default Menu;

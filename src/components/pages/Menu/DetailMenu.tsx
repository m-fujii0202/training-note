import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DetailedMenu = (props: any) => {
  // console.log("props", props);

  const { menus, setMenus } = props;

  const onAddMenu = () => {
    // console.log("メニューの追加");
    // const newMenu = {
    //   id:1,
    //   title: "新しいメニュー",
    //   cntent:"メニュー内容",

    // };
    // setMenu([...menu,newMenu]);
  };

  return (
    <SdetailMenu>
      <SMenuLists>
        {/* TODO：mapで表示させる */}
          {menus.map((menu:any,index: any) => (
            <button
            key={index}
            >
              {menu}
            </button>
          ))}
      </SMenuLists>

      <div className="addMenu">
          <button onClick={onAddMenu}>追加</button>
        </div>

      <SVolumeContainer>
        <div className="lastTimeVolume">
          <p>前回のボリュームです</p>
        </div>

        <div className="NextTimeVolume">
          <p>目標のボリュームです</p>
        </div>
      </SVolumeContainer>
    </SdetailMenu>
  );
};

const SdetailMenu = styled.div`
  height: 70%;
`;

const SMenuLists = styled.div`
  display: flex;
  flex-direction: column;
`;

const SVolumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
export default DetailedMenu;

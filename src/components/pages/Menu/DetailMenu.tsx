import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../../../Modal/Modal";

const DetailedMenu = (props: any) => {
  // console.log("props", props);

  const { menus, setMenus } = props;

  const openModal = () => {
   
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
          <button onClick={openModal}>追加</button>
          <Modal />
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

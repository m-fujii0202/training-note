import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalAddMenu from "../../../Modal/ModalAddMenu";




const DetailedMenu = (props: any) => {
  // console.log("props", props);

  const { menus, setMenus } = props;

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

      <ModalAddMenu menus={menus} setMenus={setMenus}/>
      
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

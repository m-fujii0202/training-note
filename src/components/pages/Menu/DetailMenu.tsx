import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalAddMenu from "../../../Modal/ModalAddMenu";


const DetailedMenu = (props: any) => {
  // console.log("props", props);

  const { menus, setMenus, siteList, onDeleteMenu } = props;
  console.log('props');
  console.log(menus);
  

  // const onDeleteMenu = (index: any)=>{
  //  const newMenus = [...menus];
  //  newMenus.splice(index,1);
  //  setMenus(newMenus);
  // //  alert(index);
  // }

  return (
    <SdetailMenu>
      <SMenuLists>
        {/* TODO：mapで表示させる */}
        
          {menus.map((menu:any,index: any) => {
            return (
            <Smenus
            key={index}
            >
              {menu}
              <Sbutton>
                詳細 モーダルを表示
              </Sbutton>

              <Sbutton 
               onClick={()=>onDeleteMenu(menu.index)}
               >
                削除
              </Sbutton>

            </Smenus>
            );
            })}
      </SMenuLists>

      <ModalAddMenu setMenus={setMenus} siteList={siteList} menus={menus}/>
      
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

const Sbutton = styled.button`
background-color: #adf7f7;
margin-left: 5px;
border-radius: 10px;
transition: 0.3s;

&:hover {
  cursor: pointer;
} 
`

const Smenus = styled.div`
  background-color: #e6f0f0;
  width: 100%;
  margin-top: 5px;
`

const SVolumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
export default DetailedMenu;

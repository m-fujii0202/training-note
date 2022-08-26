import { CloseButton } from "@chakra-ui/react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const closeButtonStyle = {
  height: 0,
  textAlign: "right",
};


const DetailedMenu = (props: any) => {
  // console.log("props", props);

  const { menus, setMenus } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



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

      {/* モーダルの表示ボタン */}
      <div className="addMenu">
          <button onClick={handleOpen}>追加　モーダルを表示</button>
      </div>
      
      {/* モーダル表示に関する関数 */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Box sx={closeButtonStyle}>
            <IconButton onClick={handleClose}>
              <CloseIcon>
                閉じる
              </CloseIcon>
            </IconButton>
          </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              トレーニングメニューの追加
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              テキスト
            </Typography>
          </Box>
        </Modal>

      
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

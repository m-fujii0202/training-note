import { IconButton, MenuItem, Modal, TextField, Typography,Box } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from "@mui/icons-material/Close";
import ModalSelectWeight from './ModalSelectWeight';
import ModalSelectRep from './ModalSelectRep';

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

const ModalSettingMenu  = (props:any) => {
    const { menus, setMenus, siteList, value } = props;


  //モーダル表示のstate
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [body, setBody] = useState(value);


  return (
    <div>
        <Sbutton
        onClick={handleOpen}
        >
        詳細 モーダルを表示
        </Sbutton>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Box sx={closeButtonStyle}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              トレーニングメニューの重量選択
            </Typography>

          <div className='setContainers'>
            <div className='setContainer'>
                １セット目
            </div>

            <ModalSelectWeight />

           <ModalSelectRep />
          
            </div>

          </Box>
        </Modal>
    </div>
  )
}

const Sbutton = styled.button`
background-color: #adf7f7;
margin-left: 5px;
border-radius: 10px;
transition: 0.3s;

&:hover {
  cursor: pointer;
} 
`
export default ModalSettingMenu 
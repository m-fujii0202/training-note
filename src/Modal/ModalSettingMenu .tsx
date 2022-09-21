import { IconButton, MenuItem, Modal, TextField, Typography,Box } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from "@mui/icons-material/Close";

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
    console.log(menus);

  //モーダル表示のstate
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [body, setBody] = useState(value);

  const handleChange = (e: { target: { value:any }; })=>{
    setBody(e.target.value);
    // console.log('どの部位が選択されているのか');
    // console.log(e.target.value);
 }

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
            <Box width='250px'>
              <TextField
               label='重量選択'
               select
               value={body}
               onChange={(e)=>handleChange(e)}
              >
                {/* 重量の選択を可能とする */}
                {siteList.map((site:string,index:number)=>(
                  <MenuItem
                  value={index}
                  key={index}
                  >
                    {site}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box width='250px'>
              <TextField
               label='レップ'
               select
               value={body}
               onChange={(e)=>handleChange(e)}
              >
                {/* レップの選択を可能とする */}
                {siteList.map((site:string,index:number)=>(
                  <MenuItem
                  value={index}
                  key={index}
                  >
                    {site}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
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
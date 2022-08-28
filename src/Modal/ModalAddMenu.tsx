import React, { useState } from 'react'
import { Box, Button, IconButton, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
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

const ModalAddMenu = (props:any) => {
 
  const { menus, setMenus, siteList } = props;

  //新しいメニューを入力するステート
  const [newMenu, setNewMenu] = useState('');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //初期値の設定をどうするか？
 const [body, setBody] = useState(siteList[0]);

 const handleChange = (e: { target: { value: React.SetStateAction<string>; }; })=>{
  setBody(e.target.value)
  console.log('どの部位が選択されているのか');
  console.log(body);
 }

 //新しいものメニューを追加する関数
 const onChangeMenu = (event: { target: { value: React.SetStateAction<string>; }; })=> setNewMenu(event.target.value);
 const onAddNewMenu = ()=>{
  const AddNewMenu =[...menus, newMenu];
  setMenus(AddNewMenu);
  alert(newMenu);
 };

  return (
    <div>
      {/* モーダルの表示ボタン */}
      <div className="addMenu">
          <button onClick={handleOpen}>追加　モーダルを表示</button>
      </div>

       {/* モーダル表示に関する機能 */}
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
              トレーニングメニューの追加
            </Typography>

            <Box width='250px'>
              <TextField
               label='部位選択'
               select
               value={body}
               onChange={handleChange}
              >
                {/* siteList(部位)をマップで展開 */}
                {siteList.map((site:string,index:number)=>(
                  <MenuItem 
                  value={site}
                  key={index}
                  >
                    {site}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input placeholder='メニューを追加' value={newMenu} onChange={onChangeMenu}/>
              <button 
              onClick={onAddNewMenu}
              >追加
               </button>
            </Typography>

          </Box>
        </Modal>
    </div>
  )
}

export default ModalAddMenu
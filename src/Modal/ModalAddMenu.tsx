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
 
  const { menus, setMenus } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const [body, setBody] = useState('');

 const handleChange = (e: { target: { value: React.SetStateAction<string>; }; })=>{
  setBody(e.target.value)
 }

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
               label='Select body'
               select
               value={body}
               onChange={handleChange}
              >
                <MenuItem value={'chest'}>胸部</MenuItem>
                <MenuItem value={'back'}>背部</MenuItem>
                <MenuItem value={'abdomen'}>腹部</MenuItem>
                <MenuItem value={'leg'}>脚部</MenuItem>
                <MenuItem value={'arm'}>腕部</MenuItem>
              </TextField>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input type="text" />
              <button>追加</button>
            </Typography>
          </Box>
        </Modal>
    </div>
  )
}

export default ModalAddMenu
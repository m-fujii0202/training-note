import { MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const ModalSelectRep = () => {
    const [rep, setRep] = useState('');

    const handleChange = (e: { target: { value:any }; })=>{
        console.log();
        setRep(e.target.value);
        // console.log('どの部位が選択されているのか');
        // console.log(e.target.value);
     }

  return (
    <Box width='250px'>
    <TextField
     label='レップ'
     select
     value={rep}
     onChange={(e)=>handleChange(e)}
    >
      {/* レップの選択を可能とする */}
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
      <MenuItem value={10}>10</MenuItem>
    </TextField>
  </Box>
  )
}

export default ModalSelectRep
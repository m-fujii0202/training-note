import { MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

const ModalSelectWeight = () => {

  const [weight,setWeight] = useState('');

  const handleChange = (e: { target: { value:any }; })=>{
    console.log();
    setWeight(e.target.value);
    // console.log('どの部位が選択されているのか');
    // console.log(e.target.value);
 }

  return (
    <div>
      <Box width='250px'>
              <TextField
               label='重量選択'
               select
               value={weight}
               onChange={(e)=>handleChange(e)}
              >
                {/* 重量の選択を可能とする */}
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
                <MenuItem value={70}>70</MenuItem>
                <MenuItem value={80}>80</MenuItem>
                <MenuItem value={90}>90</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </TextField>
            </Box>
    </div>
  )
}

export default ModalSelectWeight
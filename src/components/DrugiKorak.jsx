import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'; 
import Stack from '@mui/material/Stack';

const koraci = [
    'Prvi korak',
    'Drugi korak',
    'Treći korak',
  ];
  
  function DrugiKorak({page, setPage, data, setData }) {
    function Dalje() {
      setPage(() => page + 1)
    }
    function Nazad(){
      setPage(() => page - 1)
    }
    return (
      <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    <div>
        <TextField id="standard-basic" label="Grad" variant="standard" onChange={(event) => setData({...data, grad: event.target.value})} />
    </div>
    <div>
        <TextField id="standard-basic" label="Zanimanje" variant="standard" onChange={(event) => setData({...data, zanimanje: event.target.value})} />
    </div>
    <div>
        <TextField id="standard-basic" label="Godine" variant="standard" onChange={(event) => setData({...data, godine: event.target.value})} />
    </div>
    <div  className="gubmic">
    <Stack direction="row" spacing={2}>
    <Button variant="contained" onClick={Nazad}>Nazad</Button>
    <Button variant="contained" onClick={Dalje}>Dalje</Button>
    </Stack>
    </div>
    </>
  )
}

export default DrugiKorak 

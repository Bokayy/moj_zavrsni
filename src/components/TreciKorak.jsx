import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const koraci = [
  'Prvi korak',
  'Drugi korak',
  'Treći korak',
];

function TreciKorak({data, page, setPage}) {

  function Dalje() {
    setPage(() => page + 1)
  }
  function Nazad(){
    setPage(() => page - 1)
  }
  return (
    <>
     <Box sx={{ width: '100%' }}>
        <Stepper activeStep={2} alternativeLabel>
          {koraci.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    <List>
          <ListItem>
          <ListItemText
          primary="Ime"
          secondary={data.ime}
          />
          </ListItem>
          <ListItem>
          <ListItemText
          primary="Prezime"
          secondary={data.prezime}
          />
          </ListItem>
          <ListItem>
          <ListItemText
          primary="E-mail"
          secondary={data.email}
          />
          </ListItem>
          <ListItem>
          <ListItemText
          primary="Zanimanje"
          secondary={data.zanimanje}
          />
          </ListItem>
          <ListItem>
          <ListItemText
          primary="Grad"
          secondary={data.grad}
          />
          </ListItem> 
          <ListItem>
          <ListItemText
          primary="Godine"
          secondary={data.godine}
          />
          </ListItem>
      </List>
      <div  className="gubmic">
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={Nazad}>Nazad</Button>
      <Button variant="contained" onClick={Dalje}>Potvrdi</Button>
      </Stack>
      </div>
    </>
  )
}

export default TreciKorak

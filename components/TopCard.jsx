import * as React from 'react';
import  Grid  from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "300px",
  height: 90,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  
  display:"flex",
}));
const CardsContainer=styled(Grid)({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  justifyContent:"center"
})

const CustomBadge=styled('div')({
  backgroundColor:'#c8e6c9',
  color:"#1b5e20",
  textAlign:"center",
  width:"25%",
  margin:"auto",
  padding:"15px",
  borderRadius:"3px",
  height:"90%"
})



export default function TopCard() {
  return (
    <CardsContainer container spacing={2}>
      <Grid item> <DemoPaper variant="elevation"><Box sx={{flexGrow:1}}><Typography  sx={{fontWeight:700}}>$243</Typography><Typography >Daily revenue</Typography></Box><CustomBadge>+18%</CustomBadge></DemoPaper></Grid>
      <Grid item> <DemoPaper variant="elevation"><Box sx={{flexGrow:1}}><Typography sx={{fontWeight:700}}>$243</Typography><Typography >Daily revenue</Typography></Box><CustomBadge>+18%</CustomBadge></DemoPaper></Grid>
      <Grid item> <DemoPaper variant="elevation"><Box sx={{flexGrow:1}}><Typography sx={{fontWeight:700}}>$243</Typography><Typography >Daily revenue</Typography></Box><CustomBadge>+18%</CustomBadge></DemoPaper></Grid>
     

    </CardsContainer>
  );
}
import React from "react";
import { data } from "../data/data.js";

import { Typography,Grid } from "@mui/material";
import OrderCard from "./OrderCard.jsx";
const RecentOrders = () => {
  return (
    <Grid container >
      <h1>RecentOrders</h1>
      <Grid container 
    justifyContent="center"
    alignItems="center" spacing={3} style={{overflowY:"scroll",maxHeight:"400px",}}>{data.map((item) =><OrderCard data={item} key={item.id}/>)} 
    </Grid></Grid>
  );
};

export default RecentOrders;

import { Typography, Grid } from "@mui/material";
import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const OrderCard = ({ data }) => {
  return (
    <Grid item xs={10}>
      <Grid
        container
        spacing={1}
        sx={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderRadius: "5px",
          padding: "5px",
          "&:hover": {
            backgroundColor: "#e0e0e0", // change this to your desired hover color
          },
        }}
      >
        <Grid
          item
          xs={1.5}
          sx={{
            backgroundColor: "#e1bee7",
            alignItems: "center",
            justifyContent: "center",
            height: "70%",
            borderRadius: "5px",
            padding: "1%",
          }}
        >
          <ShoppingBasketIcon style={{ color: "#4a148c" }} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: 700 }}
          >{`$${data.total}`}</Typography>
          <Typography sx={{ fontSize: "14px", color: "#9e9e9e" }}>
            {data.name.first} {data.name.last}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {" "}
          <Typography sx={{ fontSize: "14px" }}>{data.date}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderCard;

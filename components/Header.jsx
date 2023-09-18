import React from "react";
import { styled } from '@mui/system';
import { Typography } from "@mui/material";
const Header = () => {
    const MyComponent = styled('div')({
        display:"flex",
        justifyContent:"space-between",
        width:"100%"
      });
  return (
    <MyComponent>
        <Typography variant="p" component={"p"}>Dashboard</Typography>
        <Typography variant="p" component={"p"}>Welcome back ,client!</Typography>
      </MyComponent>
  );
};

export default Header;

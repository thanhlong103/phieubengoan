// src/components/Header.js
import React from "react";
import { Toolbar, Typography, Button } from "@mui/material";
import { CuteAppBar } from "./StyledComponents";

const Header = () => {
  return (
    <CuteAppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, fontFamily: "'Comic Sans MS', cursive'" }}
        >
          🌈 Cute Tracker
        </Typography>
        <Button color="inherit">Reset</Button>
      </Toolbar>
    </CuteAppBar>
  );
};

export default Header;
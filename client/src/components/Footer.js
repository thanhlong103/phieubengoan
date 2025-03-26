// src/components/Footer.js
import React from "react";
import { Typography, IconButton } from "@mui/material";
import { Footer, spin } from "./StyledComponents";
import AddIcon from "@mui/icons-material/Add";

const FooterComponent = () => {
  return (
    <Footer>
      <Typography 
        variant="body2" 
        sx={{ color: "#888", fontFamily: "'Comic Sans MS', cursive'" }}
      >
        Made with 💖 by xAI | © 2025
      </Typography>
      <IconButton sx={{ animation: `${spin} 4s infinite linear` }}>
        <AddIcon sx={{ color: "#ff69b4" }} />
      </IconButton>
    </Footer>
  );
};

export default FooterComponent;
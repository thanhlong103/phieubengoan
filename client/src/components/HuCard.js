// src/components/HuCard.js
import React from "react";
import { CardContent, Typography, Box } from "@mui/material";
import { HuCard } from "./StyledComponents";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const HuCardComponent = ({ count, onClick }) => {
  return (
    <HuCard onClick={onClick}>
      <CardContent>
        <Typography 
          variant="body1" 
          sx={{ 
            color: "#dc3545",
            fontFamily: "'Comic Sans MS', cursive'",
            textAlign: "center"
          }}
        >
          Phieu Be Hu
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <SentimentDissatisfiedIcon sx={{ color: "#dc3545", mr: 1 }} />
          <Typography variant="h5">{count}</Typography>
        </Box>
      </CardContent>
    </HuCard>
  );
};

export default HuCardComponent;
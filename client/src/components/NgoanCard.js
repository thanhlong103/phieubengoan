// src/components/NgoanCard.js
import React from "react";
import { CardContent, Typography, Box } from "@mui/material";
import { NgoanCard } from "./StyledComponents";
import StarIcon from "@mui/icons-material/Star";

const NgoanCardComponent = ({ count, onClick }) => {
  return (
    <NgoanCard onClick={onClick}>
      <CardContent>
        <Typography 
          variant="body1" 
          sx={{ 
            color: "#28a745",
            fontFamily: "'Comic Sans MS', cursive'",
            textAlign: "center"
          }}
        >
          Phieu Be Ngoan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <StarIcon sx={{ color: "#28a745", mr: 1 }} />
          <Typography variant="h5">{count}</Typography>
        </Box>
      </CardContent>
    </NgoanCard>
  );
};

export default NgoanCardComponent;
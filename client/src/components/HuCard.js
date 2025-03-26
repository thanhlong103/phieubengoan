import React from "react";
import { CardContent, Typography, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledHuCard = styled("div")({
  background: "#FFD1DC",
  borderRadius: "15px",
  boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
});

const HuCardComponent = ({ count, onIncrement, onDecrement }) => {
  return (
    <StyledHuCard>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{ color: "#2A4066", fontFamily: "'Comic Sans MS', cursive'" }}
        >
          Phieu Be Hu
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton onClick={onDecrement} disabled={count === 0} sx={{ color: "#FF69B4" }}>
            <RemoveIcon />
          </IconButton>
          <SentimentDissatisfiedIcon sx={{ color: "#FF69B4", mx: 1 }} />
          <Typography variant="h5" sx={{ color: "#2A4066" }}>{count}</Typography>
          <IconButton onClick={onIncrement} sx={{ color: "#FF69B4" }}>
            <SentimentDissatisfiedIcon />
          </IconButton>
        </Box>
      </CardContent>
    </StyledHuCard>
  );
};

export default HuCardComponent;
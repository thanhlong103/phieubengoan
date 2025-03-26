import React from "react";
import { CardContent, Typography, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledNgoanCard = styled("div")({
  background: "#D4F4DD",
  borderRadius: "15px",
  boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
});

const NgoanCardComponent = ({ count, onIncrement, onDecrement }) => {
  return (
    <StyledNgoanCard>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          sx={{ color: "#2A4066", fontFamily: "'Comic Sans MS', cursive'" }}
        >
          Phieu Be Ngoan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton onClick={onDecrement} disabled={count === 0} sx={{ color: "#00CED1" }}>
            <RemoveIcon />
          </IconButton>
          <StarIcon sx={{ color: "#00CED1", mx: 1 }} />
          <Typography variant="h5" sx={{ color: "#2A4066" }}>{count}</Typography>
          <IconButton onClick={onIncrement} sx={{ color: "#00CED1" }}>
            <StarIcon />
          </IconButton>
        </Box>
      </CardContent>
    </StyledNgoanCard>
  );
};

export default NgoanCardComponent;
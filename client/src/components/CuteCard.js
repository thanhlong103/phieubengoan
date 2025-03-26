import React from "react";
import { CardContent, Typography, Grid, IconButton, Box } from "@mui/material";
import { styled } from "@mui/system";
import NgoanCard from "./NgoanCard";
import HuCard from "./HuCard";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledCuteCard = styled("div")({
  background: "#FFFFFF",
  borderRadius: "20px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px) rotate(2deg)",
    boxShadow: "0 10px 20px rgba(255, 105, 180, 0.3)",
  },
});

const PersonCard = ({ person, index, incrementNgoan, incrementHu, decreaseNgoan, decreaseHu, deletePerson }) => {
  return (
    <StyledCuteCard>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <IconButton
            onClick={() => deletePerson(index)}
            sx={{ color: "#FF69B4", position: "absolute", top: 0, right: 0 }}
          >
            <DeleteIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ color: "#2A4066", fontFamily: "'Comic Sans MS', cursive'", mb: 1 }}
          >
            {person.name} ✨
          </Typography>
          <Box sx={{ mb: 2 }}>
            <img
              src={person.image}
              alt={person.name}
              style={{ width: "128px", height: "128px", imageRendering: "pixelated" }}
              onError={(e) => (e.target.src = "/images/default.png")}
            />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <NgoanCard
                count={person.ngoan}
                onIncrement={() => incrementNgoan(index)}
                onDecrement={() => decreaseNgoan(index)}
              />
            </Grid>
            <Grid item xs={6}>
              <HuCard
                count={person.hu}
                onIncrement={() => incrementHu(index)}
                onDecrement={() => decreaseHu(index)}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </StyledCuteCard>
  );
};

export default PersonCard;
// src/components/CuteCard.js
import React from "react";
import { CardContent, Typography, Grid } from "@mui/material";
import { CuteCard } from "./StyledComponents";
import NgoanCard from "./NgoanCard";
import HuCard from "./HuCard";

const PersonCard = ({ person, index, incrementNgoan, incrementHu }) => {
  return (
    <CuteCard>
      <CardContent>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            color: "#4169e1", 
            fontFamily: "'Comic Sans MS', cursive'",
            textAlign: "center"
          }}
        >
          {person.name} ✨
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <NgoanCard 
              count={person.ngoan} 
              onClick={() => incrementNgoan(index)} 
            />
          </Grid>
          <Grid item xs={6}>
            <HuCard 
              count={person.hu} 
              onClick={() => incrementHu(index)} 
            />
          </Grid>
        </Grid>
      </CardContent>
    </CuteCard>
  );
};

export default PersonCard;
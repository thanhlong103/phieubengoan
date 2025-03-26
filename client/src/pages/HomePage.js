// client/src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { Title } from "../components/StyledComponents";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PersonCard from "../components/CuteCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const HomePage = () => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/people`);
      const data = await response.json();
      setPeopleData(data);
    };
    fetchData();
  }, []);

  const incrementNgoan = async (index) => {
    const person = peopleData[index];
    const response = await fetch(`${API_URL}/people/${person._id}/ngoan`, {
      method: "PUT",
    });
    const updatedPerson = await response.json();
    setPeopleData((prev) =>
      prev.map((p) => (p._id === updatedPerson._id ? updatedPerson : p))
    );
  };

  const incrementHu = async (index) => {
    const person = peopleData[index];
    const response = await fetch(`${API_URL}/people/${person._id}/hu`, {
      method: "PUT",
    });
    const updatedPerson = await response.json();
    setPeopleData((prev) =>
      prev.map((p) => (p._id === updatedPerson._id ? updatedPerson : p))
    );
  };

  return (
    <Box sx={{ background: "#f9f9f9", minHeight: "100vh" }}>
      <Header />
      <Container sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Title variant="h4" gutterBottom>
            Phieu Be Ngoan & Phieu Be Hu
          </Title>
          <Typography 
            variant="subtitle1" 
            sx={{ color: "#666", fontFamily: "'Comic Sans MS', cursive'" }}
          >
            Tap to add points to our little stars! 🌟
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {peopleData.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={person._id}>
              <PersonCard 
                person={person} 
                index={index} 
                incrementNgoan={incrementNgoan} 
                incrementHu={incrementHu} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default HomePage;
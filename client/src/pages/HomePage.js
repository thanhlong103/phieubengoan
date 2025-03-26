import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PersonCard from "../components/CuteCard";
import StarIcon from "@mui/icons-material/Star";

// Define backend URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const BASE_URL = API_URL.replace("/api", "");

const HeroSection = styled(Box)({
  background: "linear-gradient(135deg, #FFD1DC, #B2EBF2)",
  borderRadius: "25px",
  padding: "40px 20px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "-50px",
    width: "150px",
    height: "150px",
    background: "url('/images/cloud.png') no-repeat",
    backgroundSize: "contain",
    opacity: 0.3,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-50px",
    right: "-50px",
    width: "150px",
    height: "150px",
    background: "url('/images/cloud.png') no-repeat",
    backgroundSize: "contain",
    opacity: 0.3,
  },
});

const PageTitle = styled(Typography)({
  fontFamily: "'Comic Sans MS', cursive",
  color: "#2A4066",
  fontSize: { xs: "2rem", sm: "2.5rem" },
  fontWeight: "bold",
  textShadow: "2px 2px 4px #FF69B4",
  animation: "bounceIn 1s ease-in-out",
  "@keyframes bounceIn": {
    "0%": { transform: "scale(0.8)", opacity: 0 },
    "60%": { transform: "scale(1.1)", opacity: 1 },
    "100%": { transform: "scale(1)" },
  },
});

const AddCard = styled(Card)({
  background: "linear-gradient(135deg, #B2EBF2, #FFD1DC)",
  borderRadius: "20px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "500px",
  width: "100%",
  animation: "fadeIn 1s ease-in-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#FF69B4",
  color: "#FFF",
  fontFamily: "'Comic Sans MS', cursive",
  borderRadius: "15px",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#00CED1",
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
  },
});

const CardWrapper = styled(Box)({
  animation: "cardFadeIn 0.5s ease-in-out",
  "@keyframes cardFadeIn": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
});

const HomePage = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [newPersonName, setNewPersonName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/people`);
      const data = await response.json();
      const updatedData = data.map((person) => ({
        ...person,
        image: `${BASE_URL}${person.image}`,
      }));
      setPeopleData(updatedData);
    };
    fetchData();
  }, []);

  const incrementNgoan = async (index) => {
    const person = peopleData[index];
    const response = await fetch(`${API_URL}/people/${person._id}/ngoan`, { method: "PUT" });
    const updatedPerson = await response.json();
    updatedPerson.image = `${BASE_URL}${updatedPerson.image}`;
    setPeopleData((prev) => prev.map((p) => (p._id === updatedPerson._id ? updatedPerson : p)));
  };

  const incrementHu = async (index) => {
    const person = peopleData[index];
    const response = await fetch(`${API_URL}/people/${person._id}/hu`, { method: "PUT" });
    const updatedPerson = await response.json();
    updatedPerson.image = `${BASE_URL}${updatedPerson.image}`;
    setPeopleData((prev) => prev.map((p) => (p._id === updatedPerson._id ? updatedPerson : p)));
  };

  const decreaseNgoan = async (index) => {
    const person = peopleData[index];
    const response = await fetch(`${API_URL}/people/${person._id}/ngoan/decrease`, { method: "PUT" });
    const updatedPerson = await response.json();
    updatedPerson.image = `${BASE_URL}${updatedPerson.image}`;
    setPeopleData((prev) => prev.map((p) => (p._id === updatedPerson._id ? updatedPerson : p)));
  };

  const decreaseHu = async (index) => {
    const person = peopleData[index];
    const response = await fetch(`${API_URL}/people/${person._id}/hu/decrease`, { method: "PUT" });
    const updatedPerson = await response.json();
    updatedPerson.image = `${BASE_URL}${updatedPerson.image}`;
    setPeopleData((prev) => prev.map((p) => (p._id === updatedPerson._id ? updatedPerson : p)));
  };

  const deletePerson = async (index) => {
    const person = peopleData[index];
    await fetch(`${API_URL}/people/${person._id}`, { method: "DELETE" });
    setPeopleData((prev) => prev.filter((p) => p._id !== person._id));
  };

  const addPerson = async () => {
    if (!newPersonName.trim()) return;
    const formData = new FormData();
    formData.append("name", newPersonName);
    const fileInput = document.querySelector("#imageInput");
    if (fileInput && fileInput.files[0]) formData.append("image", fileInput.files[0]);
    try {
      const response = await fetch(`${API_URL}/people`, { method: "POST", body: formData });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newPerson = await response.json();
      newPerson.image = `${BASE_URL}${newPerson.image}`;
      setPeopleData((prev) => [...prev, newPerson]);
      setNewPersonName("");
      fileInput.value = "";
    } catch (err) {
      console.error("Error adding person:", err);
      alert("Failed to add person. Please try again.");
    }
  };

  const resetAllPoints = async () => {
    try {
      const updatedData = await Promise.all(
        peopleData.map(async (person) => {
          const response = await fetch(`${API_URL}/people/${person._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ngoan: 0, hu: 0 }),
          });
          const updatedPerson = await response.json();
          updatedPerson.image = `${BASE_URL}${updatedPerson.image}`;
          return updatedPerson;
        })
      );
      setPeopleData(updatedData);
    } catch (err) {
      console.error("Error resetting points:", err);
      alert("Failed to reset points. Please try again.");
    }
  };

  return (
    <Box sx={{ background: "#FFF8E7", minHeight: "100vh", overflow: "hidden" }}>
      {/* <Header onReset={resetAllPoints} /> */}
      <Container sx={{ py: 8 }}>
        {/* Hero Section */}
        <HeroSection sx={{ textAlign: "center", mb: 6 }}>
          <PageTitle variant="h4">
            Phieu Be Ngoan & Phieu Be Hu
          </PageTitle>
          <Typography
            variant="h6"
            sx={{
              color: "#2A4066",
              fontFamily: "'Comic Sans MS', cursive'",
              fontSize: { xs: "1rem", sm: "1.2rem" },
              mb: 2,
            }}
          >
            A fun way to reward our little stars! <StarIcon sx={{ color: "#FF69B4" }} />
          </Typography>
          <StyledButton onClick={() => document.getElementById("add-section").scrollIntoView({ behavior: "smooth" })}>
            Start Awarding Stars!
          </StyledButton>
        </HeroSection>

        {/* Add Person Section */}
        <Box id="add-section" sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <AddCard>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <TextField
                label="New Little Star"
                value={newPersonName}
                onChange={(e) => setNewPersonName(e.target.value)}
                sx={{
                  mb: 2,
                  width: "220px",
                  "& .MuiInputBase-root": { fontFamily: "'Comic Sans MS', cursive'" },
                  "& .MuiInputLabel-root": { fontFamily: "'Comic Sans MS', cursive'", color: "#2A4066" },
                }}
                variant="outlined"
              />
              <input
                type="file"
                id="imageInput"
                accept="image/png"
                style={{ marginBottom: "15px", fontFamily: "'Comic Sans MS', cursive'" }}
              />
              <StyledButton onClick={addPerson}>
                Add Star
              </StyledButton>
            </CardContent>
          </AddCard>
        </Box>

        {/* People Grid */}
        <Grid container spacing={4} justifyContent="center">
          {peopleData.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={person._id}>
              <CardWrapper style={{ animationDelay: `${index * 0.2}s` }}>
                <PersonCard
                  person={person}
                  index={index}
                  incrementNgoan={incrementNgoan}
                  incrementHu={incrementHu}
                  decreaseNgoan={decreaseNgoan}
                  decreaseHu={decreaseHu}
                  deletePerson={deletePerson}
                />
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default HomePage;
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

// Styled Components for Navbar
const Navbar = styled(Box)({
  background: "linear-gradient(90deg, #B2EBF2, #FFD1DC)",
  padding: "15px 20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NavTitle = styled(Typography)({
  fontFamily: "'Comic Sans MS', cursive",
  color: "#2A4066",
  fontSize: "1.8rem",
  fontWeight: "bold",
  textShadow: "1px 1px 3px #FF69B4",
  animation: "pulse 2s infinite",
  "&:hover": {
    color: "#00CED1",
    transition: "color 0.3s ease",
  },
  "@keyframes pulse": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.05)" },
    "100%": { transform: "scale(1)" },
  },
});

const DecorativeStar = styled(StarIcon)({
  color: "#FF69B4",
  fontSize: "2rem",
  animation: "spin 4s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

const Header = () => {
  return (
    <Navbar>
      <DecorativeStar sx={{ mr: 2 }} />
      <NavTitle variant="h1">
        Phieu Be Ngoan & Hu
      </NavTitle>
      <DecorativeStar sx={{ ml: 2 }} />
    </Navbar>
  );
};

export default Header;
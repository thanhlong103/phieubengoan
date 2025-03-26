// src/components/StyledComponents.js
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Card, Typography, AppBar, Box } from "@mui/material";

// Animation keyframes
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components
export const CuteCard = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  background: "linear-gradient(135deg, #fff0f6 0%, #e6e6fa 100%)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "'Comic Sans MS', cursive",
  color: "#ff69b4",
  textShadow: "2px 2px 4px rgba(255,105,180,0.3)",
  animation: `${bounce} 2s infinite`,
}));

export const NgoanCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(45deg, #d4edda 0%, #b7e1cd 100%)",
  borderRadius: "15px",
  border: "3px dashed #28a745",
  cursor: "pointer",
  "&:hover": {
    background: "linear-gradient(45deg, #c3e6cb 0%, #a3d9c0 100%)",
  },
}));

export const HuCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(45deg, #f8d7da 0%, #f5c6cb 100%)",
  borderRadius: "15px",
  border: "3px dashed #dc3545",
  cursor: "pointer",
  "&:hover": {
    background: "linear-gradient(45deg, #f5c6cb 0%, #f1b0b7 100%)",
  },
}));

export const CuteAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(90deg, #ff9ff3 0%, #feca57 100%)",
}));

export const Footer = styled(Box)(({ theme }) => ({
  background: "#f0f0f0",
  padding: theme.spacing(2),
  textAlign: "center",
  marginTop: theme.spacing(4),
}));
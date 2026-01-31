import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import loginbackground from "../images/backgroundcarimage2.jpg";
import { useNavigate } from "react-router-dom";

const ChooseAction = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  const handleOnClickAddOwnerDetails = () => {
    setTimeout(() => {
      navigate("/ownerdetailsform");
    }, 500);
  };

  const handleOnClickAddRentalDetails = () => {
    setTimeout(() => {
      navigate("/tentaldetailsform");
    }, 500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 3,
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          fontSize: "32px",
          fontWeight: "bold",
          color: "white",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
        }}
      >
        Car Rental Services
      </Typography>

      {/* Logout Button */}
      <Button
        onClick={handleLogout}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          textTransform: "none",
          padding: "6px 16px",
          borderRadius: "5px",
          backgroundColor: "#d32f2f",
          color: "white",
          "&:hover": {
            backgroundColor: "#b71c1c",
          },
        }}
        variant="contained"
      >
        Logout
      </Button>

      {/* Main Content */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: 10,
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for better visibility
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "black",
            marginBottom: 2,
          }}
        >
          What would you like to do?
        </Typography>

        {/* Action Buttons */}
        <Button
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            marginBottom: 2,
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            "&:hover": {
              backgroundColor: "#3f51b5",
            },
          }}
          variant="contained"
          color="primary"
          onClick={handleOnClickAddOwnerDetails}
        >
          Give Car On Rent
        </Button>
        <Button
          sx={{
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            "&:hover": {
              backgroundColor: "#3f51b5",
            },
          }}
          variant="contained"
          color="primary"
          onClick={handleOnClickAddRentalDetails}
        >
          Take Car On Rent
        </Button>
      </Container>
    </Box>
  );
};

export default ChooseAction;

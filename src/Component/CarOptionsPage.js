import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import luxuryCarImage from "../images/luxury-cars.jpeg";
import sedanImage from "../images/Sedans.jpeg";
import suvImage from "../images/suvs.jpeg";

const CarOptionsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const CarOptions = [
    { id: 1, name: "Sedan", image: sedanImage },
    { id: 2, name: "SUV", image: suvImage },
    { id: 3, name: "Luxury", image: luxuryCarImage },
  ];

  // Handle Book Now button click
  const handleBookNow = (car) => {
    // Navigate to the CarDetails page and pass the selected car details
    navigate("/carsDetails", { state: { car } });
  };

  return (
    <Box
      sx={{
        padding: "40px 20px",
        backgroundColor: "#2f4f4f", // Semi-grey background
        minHeight: "100vh", // Full page height
      }}
    >
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom
      sx={{ textShadow:"1px 1px 3px rgba(0, 0, 0, 0.7)", color:"white" }}>
        
        Choose a Car for Rent
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ marginBottom: "40px", color: "white",textShadow:"1px 1px 3px rgba(0, 0, 0, 0.7)" }}
        
      >
        The perfect cars for your journey.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {CarOptions.map(({ id, name, image }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: "16px", // Rounded corners
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow border
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Hover effect
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
                },
                backgroundColor: "#fff", // Card background
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={image}
                alt={name}
                sx={{ borderRadius: "16px 16px 0 0" }} // Rounded corners for the image
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {name}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleBookNow({ id, name, image })} // Pass the selected car to the handler
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "#ff5722",
                    "&:hover": { backgroundColor: "#e64a19" },
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarOptionsPage;

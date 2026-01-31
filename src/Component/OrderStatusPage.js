import { Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../images/endpage.jpeg";

const OrderStatusPage = () => {
const location = useLocation();
const navigate = useNavigate();
const { car, totalPrice, rentalDays, paymentStatus } = location.state;

return (
    <Box
    sx={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "50px auto",
        backgroundColor: "#f5f5f5",
        borderRadius: "15px",
        backgroundImage:`url(${backgroundImage})`, // Use your desired background image
        backgroundSize: "cover",
        backgroundPosition: "top",
    }}
    >
    <Typography
        variant="h3"
        gutterBottom
        sx={{
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "50px",
          color: "semi-black", // Adjust text color for better visibility
        }}
    >
        Order Status
    </Typography>

    <Grid container spacing={4}>
        {/* Left side - order details */}
        <Grid item xs={12} md={7}>
        <Typography variant="h6" gutterBottom >
            <strong>Car:</strong> {car?.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
            <strong>Rental Days:</strong> {rentalDays}
        </Typography>
        <Typography variant="body1" gutterBottom>
            <strong>Total Price:</strong> ₹{totalPrice}
        </Typography>
        <Typography variant="body1" gutterBottom>
            <strong>Payment Status:</strong> {paymentStatus}
        </Typography>

        <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{ marginTop: "20px", textAlign: "center" }}
        >
            Back to Home
        </Button>
        </Grid>

        {/* Right side - car image */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
        {car?.image && (
            <img
            src={car.image}
            alt={car.name}
            style={{
                width: "300px", // Set the desired width for the car image
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            }}
            />
        )}
        </Grid>
    </Grid>
    </Box>
);
};

export default OrderStatusPage;

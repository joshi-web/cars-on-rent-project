import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../images/endpage.jpeg";

// Styled components
const StyledBox = styled(Box)({
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",

});

const CompactButton = styled(Button)({
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "8px",
  background: "#007bff",
  color: "#fff",
  "&:hover": {
    background: "#0056b3",
    
  },
});

// Format Card Number and Expiry Date
const formatCardNumber = (value) => {
  const numbers = value.replace(/\D/g, "");
  const formatted = numbers.replace(/(\d{4})(?=\d)/g, "$1 ");
  return formatted.slice(0, 19); // Limit to 19 characters
};

const formatExpiryDate = (value) => {
  const numbers = value.replace(/\D/g, "");
  const formatted = numbers.replace(/(\d{2})(?=\d)/g, "$1/");
  return formatted.slice(0, 5); // Limit to 5 characters (MM/YY)
};

const CarsOnRentPaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const carPrices = {
    "Maruti Suzuki": 1500,
    "Renault Duster": 2000,
    "Volkswagen Skoda": 2500,
    "Tata Punch": 1800,
    "Hyundai Creta": 3000,
    "Tata Safari": 3500,
    "Mahindra Thar": 4000,
    "Maruti XL6": 2800,
    "Audi": 8000,
    "BMW": 9000,
    "Rolls Royce": 15000,
    "Ford Mustang": 12000,
  };

  const dailyRate = carPrices[car?.name] || 2000;
  const [rentalDays, setRentalDays] = React.useState(1);
  const [cardDetails, setCardDetails] = React.useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [error, setError] = React.useState("");
  const totalPrice = rentalDays * dailyRate;

  const handlePayment = () => {
    // Validation to check if all fields are filled
    if (
      !cardDetails.cardNumber ||
      !cardDetails.expiryDate ||
      !cardDetails.cvv ||
      !cardDetails.cardholderName ||
      rentalDays <= 0
    ) {
      setError("Please fill all the payment details and rental days.");
      return; // Stop further execution if fields are incomplete
    }

    setError(""); // Clear any previous errors

    // Navigate to order status page after payment
    navigate("/OrderStatusPage", {
      state: {
        car,
        totalPrice,
        rentalDays,
        paymentStatus: "Payment Successful",
      },
    });
  };

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "50px auto",
        backgroundColor: "#f5f5f5",
        borderRadius: "15px",
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}
      >
        Payment for {car?.name || "Car"}
      </Typography>

      {error && <Alert severity="error">{error}</Alert>} {/* Show error message */}

      <Grid container spacing={4}>
        {/* Selected Car Summary */}
        <Grid item xs={12} md={4}>
          <StyledBox>
            {car?.image && (
              <img
                src={car.image}
                alt={car.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  
                }}
              />
            )}
            <Typography variant="h6" gutterBottom>
              {car?.name || "Selected Car"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Daily Rate:</strong> ₹{dailyRate}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Total Price:</strong> ₹{totalPrice}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Rental Days:</strong> {rentalDays}
            </Typography>
          </StyledBox>
        </Grid>

        {/* Payment Form */}
        <Grid item xs={12} md={8}>
          <StyledBox>
            <Typography variant="h6" gutterBottom>
              Card Payment Details
            </Typography>
            <TextField
              label="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails((prev) => ({
                  ...prev,
                  cardNumber: formatCardNumber(e.target.value),
                }))
              }
              fullWidth
              sx={{ marginBottom: "15px" }}
              placeholder="1234 5678 9012 3456"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date"
                  value={cardDetails.expiryDate}
                  onChange={(e) =>
                    setCardDetails((prev) => ({
                      ...prev,
                      expiryDate: formatExpiryDate(e.target.value),
                    }))
                  }
                  fullWidth
                  sx={{ marginBottom: "15px" }}
                  placeholder="MM/YY"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  type="password"
                  value={cardDetails.cvv}
                  onChange={(e) =>
                    setCardDetails((prev) => ({ ...prev, cvv: e.target.value }))
                  }
                  fullWidth
                  sx={{ marginBottom: "15px" }}
                  placeholder="123"
                />
              </Grid>
            </Grid>
            <TextField
              label="Cardholder Name"
              value={cardDetails.cardholderName}
              onChange={(e) =>
                setCardDetails((prev) => ({
                  ...prev,
                  cardholderName: e.target.value,
                }))
              }
              fullWidth
              sx={{ marginBottom: "15px" }}
              placeholder="John Doe"
            />
            <TextField
              type="number"
              label="Rental Days"
              value={rentalDays}
              onChange={(e) => setRentalDays(e.target.value > 0 ? e.target.value : 1)}
              fullWidth
              sx={{ marginBottom: "15px" }}
            />
            <CompactButton onClick={handlePayment}>
              Pay ₹{totalPrice}
            </CompactButton>
          </StyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarsOnRentPaymentPage;

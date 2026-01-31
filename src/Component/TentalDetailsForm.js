import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/takecarbackground_image.jpeg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/CarOptionsPage");
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: { xs: "80px 20px", md: "240px 40px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.78)", // Black with 50% opacity
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3.75rem" } }}
          >
            Find Your Perfect Ride
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: "600px", margin: "auto", fontSize: { xs: "1rem", md: "1.25rem" } }}
            gutterBottom
          >
            Discover affordable and reliable car rentals tailored to your needs, from compact cars to luxury rides.
          </Typography>
          <Button
            variant="contained"
            onClick={handleBookNowClick}
            sx={{
              backgroundColor: "#ff5722",
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#e64a19",
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

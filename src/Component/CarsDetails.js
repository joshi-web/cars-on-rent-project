import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import luxuryaudiImage from "../images/luxuryaudi.jpeg";
import luxurybmwImage from "../images/luxurybmw.jpeg";
import luxuryferrari from "../images/luxuryferrari.jpg";
import LuxuryGwagon from "../images/LuxuryGwagon.jpg";
import luxurymustangImage from "../images/luxurymustang.webp";
import luxuryrollasroyceImage from "../images/luxuryrollasroyce.jpeg";
import SedansdusterImage from "../images/Sedanduster.jpeg";
import SedanHyundaiVerna from "../images/SedanHyundaiVerna.jpg";
import SedanpunchImage from "../images/Sedanpunch.jpeg";
import SedanskodaImage from "../images/Sedanskoda.jpeg";
import SedansuzukiImage from "../images/Sedansuzuki.jpeg";
import SedanTriber from "../images/SedanTriber.jpg";
import SuvcretaImage from "../images/Suvcreta.jpeg";
import suvsafariImage from "../images/suvsafari.jpeg";
import SuvScorpion from "../images/SuvScorpion.jpg";
import SuvTatasierra from "../images/SuvTatasierra.jpg";
import suvtharImage from "../images/suvthar.jpeg";
import suvXl6Image from "../images/suvXl6.jpeg";

const Sedan = [
    {
    id: 1,
    name: "Maruti Suzuki",
    image: SedansuzukiImage,
    price: 1500,
    },
    {
    id: 2,
    name: "Renault Duster",
    image: SedansdusterImage,
    price: 2000,
    },
    {
    id: 3,
    name: "Volkswagen Skoda",
    image: SedanskodaImage,
    price: 2500,
    },
    {
    id: 4,
    name: "Tata Punch",
    image: SedanpunchImage,
    price: 1800,
    },
    {
     id: 5,
    name: "Renault Triber",
    image:SedanTriber ,
    price: 1000,  
    },
    {
     id: 6,
    name: " Hyundai Verna",
    image:SedanHyundaiVerna ,
    price: 3000,  
    }
];

const SUV = [
    {
    id: 1,
    name: "Hyundai Creta",
    image: SuvcretaImage,
    price: 3000,
    },
    {
    id: 2,
    name: "Tata Safari",
    image: suvsafariImage,
    price: 3500,
    },
    {
    id: 3,
    name: "Mahindra Thar",
    image: suvtharImage,
    price: 4000,
    },
    {
    id: 4,
    name: "Maruti XL6",
    image: suvXl6Image,
    price: 2800,
    },
     {
    id: 5,
    name: "Tata Sierra",
    image: SuvTatasierra,
    price: 4500,
    },
     {
    id: 6,
    name: "scorpio-n",
    image: SuvScorpion ,
    price: 5000,
    },
];
const Luxury = [
    {
    id: 1,
    name: "Audi",
    image: luxuryaudiImage,
    price: 8000,
    },
    {
    id: 2,
    name: "BMW",
    image: luxurybmwImage,
    price: 9000,
    },
    {
    id: 3,
    name: "Rolls Royce",
    image: luxuryrollasroyceImage,
    price: 15000,
    },
    {
    id: 4,
    name: "Ford Mustang",
    image: luxurymustangImage,
    price: 12000,
    },
    {
    id: 5,
    name: "G-wagon",
    image: LuxuryGwagon,
    price: 15000,
    },
    {
    id: 6,
    name: "Ferrari",
    image: luxuryferrari,
    price: 22000,
    },
];

const CarsDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [carType, setCarType] = useState(location?.state?.car?.name);  
    useEffect(() => {
    setCarType(location?.state?.car?.name);
    }, [location]);
    const handleTakeCarOnRent = (car) => {
    navigate(`/CarsOnRentPaymentPage`, { state: { car } });
    };
    const renderCarCards = (cars) =>
    cars.map((car) => (
        <Grid item xs={12} sm={6} md={4} key={car?.id}>
        <Card
            sx={{
            textAlign: "center",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
            },
            backgroundColor: "#fff",
            }}
        >
            <CardMedia
            component="img"
            height="200"
            image={car?.image}
            alt={car?.name}
            />
            <CardContent>
            <Typography variant="h5" gutterBottom>
                {car?.name}
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                marginTop: "10px",
                fontWeight: "bold",
                }}
            >
                ₹{car?.price} <span style={{ fontSize: "14px" }}>per day</span>
            </Typography>
            </CardContent>
            <Box sx={{ padding: 2 }}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleTakeCarOnRent(car)}
            >
                Take on Rent
            </Button>
            </Box>
        </Card>
        </Grid>
    ));
    return (
    <Box sx={{ padding: 4, backgroundColor: "#d3d3d3" }}>
        <Grid container spacing={3}>
        {carType === "Sedan" && renderCarCards(Sedan)}
        {carType === "SUV" && renderCarCards(SUV)}
        {carType === "Luxury" && renderCarCards(Luxury)}
        </Grid>
    </Box>
    );
};
export default CarsDetails;
import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Box,
  Paper,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material"; // For file upload icon
import carBackground from "../images/images3.jpeg"; // Adjust the path as needed

const OwnerDetailsForm = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [successDialog, setSuccessDialog] = useState(false); // State to control popup dialog
  const [carImage, setCarImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarImage(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  const handleSubmit = () => {
    // Validation check for required fields
    if (
      !data.name ||
      !data.email ||
      !data.Contactnumber ||
      !data.Cardecription ||
      !data.model ||
      !data.color ||
      !data.pricePerDay ||
      !carImage
    ) {
      setError("All fields are required!");
      return;
    }

    setError(""); // Clear any previous error messages
    setSuccessDialog(true); // Show the success dialog
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${carBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      {/* Form Container */}
      <Paper
        elevation={5}
        sx={{
          maxWidth: "900px", // Increased container width to accommodate two columns
          width: "100%",
          padding: 3,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Add Owner and Car Details
        </Typography>
        <Divider sx={{ marginBottom: 3, fontWeight:"bold"}} />

        {/* Error Message */}
        {error && (
          <Typography color="error" textAlign="center" gutterBottom>
            {error}
          </Typography>
        )}

        {/* Grid Layout for Two Columns */}
        <Grid container spacing={3}>
          {/* Owner Details Column */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
                Owner Details:
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Owner Name</Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="name"
                            value={data?.name || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Owner Email ID</Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="email"
                            value={data?.email || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Contact Number</Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="Contactnumber"
                            value={data?.Contactnumber || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>

          {/* Car Details Column */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
                Car Details:
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Car Model</Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="model"
                            value={data?.model || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Car Color</Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="color"
                            value={data?.color || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Price Per Day</Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="pricePerDay"
                            value={data?.pricePerDay || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">₹</InputAdornment>
                              ),
                            }}
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Car Description </Typography>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <TextField
                            name="Cardecription"
                            value={data?.Cardecription || ""}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    {/* Car Image Upload */}
                    <TableRow>
                      <TableCell>
                        <Typography variant="body2">Car Image </Typography>
                      </TableCell>
                      <TableCell>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: "none" }}
                          id="car-image-upload"
                        />
                        <label htmlFor="car-image-upload">
                          <IconButton component="span">
                            <PhotoCamera />
                          </IconButton>
                        </label>
                        {carImage && (
                          <img
                            src={carImage}
                            alt="Car Preview"
                            style={{
                              marginTop: "10px",
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              padding: "6px 12px",
              fontSize: "14px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>

      {/* Success Dialog */}
      <Dialog open={successDialog} onClose={() => setSuccessDialog(false)}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Owner and car details have been saved successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSuccessDialog(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OwnerDetailsForm;

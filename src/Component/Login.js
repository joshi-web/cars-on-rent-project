import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import loginbackground from "../images/loginbackground.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState({}); // Mock database to store user credentials
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Strong password validation function
  const isStrongPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};:'",<>/./?\\|`~-]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gmail validation (for registration)
    if (isRegistering) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!emailRegex.test(email)) {
        setMessage("Please enter a valid Gmail address.");
        setSuccess(false);
        return; // Prevent form submission if email is invalid
      }

      // Strong password validation
      if (!isStrongPassword(password)) {
        setMessage(
          "Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character."
        );
        setSuccess(false);
        return; // Prevent form submission if password is weak
      }

      // Registration logic
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        setSuccess(false);
      } else if (users[username]) {
        setMessage("Username already exists. Please choose another.");
        setSuccess(false);
      } else {
        setUsers((prev) => ({ ...prev, [username]: { email, password } })); // Save user
        setMessage("Registration Successful! Please log in.");
        setSuccess(true);
        setIsRegistering(false); // Switch to login view
        setPassword(""); // Clear password field
        setConfirmPassword("");
      }
    } else {
      // Login logic
      if (users[username] && users[username].password === password) {
        setMessage(`Login Successful! Welcome, ${username}`);
        setTimeout(() => {
          navigate("login/chooseaction");
        }, 2500);
        setSuccess(true);
      } else {
        setMessage("Invalid Username or Password");
        setSuccess(false);
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          marginTop: "20px",
          marginLeft: "20px",
          height: "auto",
          width: "320px",
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          {isRegistering ? "Register" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <TextField
              fullWidth
              label="Email"
              variant="filled"
              margin="normal"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          <TextField
            fullWidth
            label="Username"
            variant="filled"
            margin="normal"
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="filled"
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegistering && (
            <TextField
              fullWidth
              label="Confirm Password"
              variant="filled"
              size="small"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
        </form>
        {message && (
          <Alert severity={success ? "success" : "error"} sx={{ mt: 2 }}>
            {message}
          </Alert>
        )}
        <Button
          fullWidth
          variant="text"
          onClick={() => {
            setIsRegistering(!isRegistering);
            setMessage(""); // Clear any previous messages
          }}
          sx={{ mt: 2 }}
        >
          {isRegistering
            ? "Already have an account? Log in"
            : "Don't have an account? Register"}
        </Button>
      </Container>
    </Box>
  );
};

export default Login;

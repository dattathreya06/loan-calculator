import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        padding: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Something went wrong in the application.
      </Typography>
      <Button variant="outlined" onClick={handleGoHome}>
        GO HOME
      </Button>
    </Box>
  );
};

export default ErrorPage;

import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  Paper,
  Grid,
} from "@mui/material";
import { useExchangeRates } from "../hooks/UseExchangerates";
import { useAppContext } from "../context/AppContext";

const ExchangeRates = () => {
  const rates = useExchangeRates();
  const { currency, changeCurrency } = useAppContext();

  const [amount, setAmount] = useState(1);

  const handleCurrencyChange = (event) => {
    changeCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertedRates = Object.entries(rates)
    .filter(([code]) => code !== currency)
    .map(([code, rate]) => ({
      code,
      value: (rate / rates[currency]) * amount,
    }));

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Live Currency Exchange Rates
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />

        <TextField
          select
          label="Base Currency"
          value={currency}
          onChange={handleCurrencyChange}
        >
          {Object.keys(rates).map((code) => (
            <MenuItem key={code} value={code}>
              {code}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={2}>
        {convertedRates.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.code}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{item.code}</Typography>
              <Typography>{item.value.toFixed(2)}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExchangeRates;

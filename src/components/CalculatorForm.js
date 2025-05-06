import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";

const CalculatorForm = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const [errors, setErrors] = useState({
    principal: false,
    rate: false,
    years: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      principal: principal === "",
      rate: rate === "",
      years: years === "",
    };

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).includes(true);

    if (isValid) {
      onCalculate(Number(principal), Number(rate), Number(years) * 12);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField
          fullWidth
          label="Loan Amount"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          error={errors.principal}
          helperText={errors.principal ? "Loan amount is required" : ""}
        />
        <TextField
          fullWidth
          label="Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          error={errors.rate}
          helperText={errors.rate ? "Interest rate is required" : ""}
        />
        <TextField
          fullWidth
          label="Term (Years)"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          error={errors.years}
          helperText={errors.years ? "Term is required" : ""}
        />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          CALCULATE
        </Button>
      </Box>
    </Box>
  );
};

export default CalculatorForm;

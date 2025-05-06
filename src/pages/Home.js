import React, { useState } from "react";
import CalculatorForm from "../components/CalculatorForm";
import AmortizationTable from "../components/AmortizationTable";
import CurrencyConverter from "../components/CurrencyConverter";
import { useEMICalculator } from "../hooks/UseEMICalculator";
import { Button, Box, Typography, Stack } from "@mui/material";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const [data, setData] = useState(null);
  const { currency } = useAppContext();

  const calculateEMI = useEMICalculator(); // use hook at top level

  const handleCalculate = (P, R, N) => {
    const result = calculateEMI(P, R, N); // call the function it returns
    setData(result);
  };

  const handleReset = () => {
    setData(null);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <CalculatorForm onCalculate={handleCalculate} />

      {data && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Monthly EMI: ${data.EMI}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <CurrencyConverter emi={data.EMI} />
            <Button variant="outlined" color="secondary" onClick={handleReset}>
              Reset Table
            </Button>
          </Stack>

          <Typography variant="h6" sx={{ mb: 1 }}>
            Amortization Schedule ({currency})
          </Typography>

          <AmortizationTable schedule={data.schedule} />
        </Box>
      )}
    </Box>
  );
};

export default Home;

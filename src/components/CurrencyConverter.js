import React from "react";
import { useAppContext } from "../context/AppContext";
import { MenuItem, Select } from "@mui/material";

const CurrencyConverter = ({ emi }) => {
  const { currency, setCurrency, exchangeRates } = useAppContext();
  //   const converted = (emi * (exchangeRates[currency] || 1)).toFixed(2);

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* <Typography>Converted EMI:</Typography>
      <Typography variant="h6">
        {converted} {currency}
      </Typography> */}
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        sx={{ mt: 1 }}
      >
        {Object.keys(exchangeRates).map((code) => (
          <MenuItem key={code} value={code}>
            {code}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CurrencyConverter;

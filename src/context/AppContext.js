import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  const [currency, setCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({});

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };
  const fetchRates = async () => {
    try {
      const res = await axios.get(
        `https://v6.exchangerate-api.com/v6/b35832c8e70e420cbf157d92/latest/USD`,
        {
          headers: {
            Expect: "", // This removes the Expect header
          },
        }
      );
      setExchangeRates(res.data.conversion_rates);
    } catch (err) {
      console.error("Failed to fetch exchange rates", err);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <AppContext.Provider
      value={{
        themeMode,
        toggleTheme,
        currency,
        setCurrency,
        changeCurrency,
        exchangeRates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

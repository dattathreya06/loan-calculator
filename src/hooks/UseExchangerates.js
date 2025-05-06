import { useEffect, useState } from "react";
import axios from "axios";

export const useExchangeRates = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/b35832c8e70e420cbf157d92/latest/USD`
        );
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      }
    };

    fetchRates();
  }, []);

  return rates;
};

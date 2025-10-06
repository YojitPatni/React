import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) // ✅ return the parsed JSON
      .then((res) => setData(res[currency])) // ✅ update with the correct data
      .catch((err) => console.error("Failed to fetch currency data:", err)); // optional error handling
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

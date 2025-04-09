// src/pages/CurrencyConverterPage.jsx
import { useState, useEffect } from "react";

const CurrencyConverterPage = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  const convertCurrency = async () => {
    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      const data = await res.json();
      setConvertedAmount(data.result);
    } catch (err) {
      console.error("Conversion error:", err);
    }
  };

  useEffect(() => {
    const fetchCurrencies = async () => {
      const res = await fetch("https://api.exchangerate.host/symbols");
      const data = await res.json();
      setCurrencies(Object.keys(data.symbols));
    };
    fetchCurrencies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full" >
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Currency Converter</h2>
        
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:custom-yellow text-gray-400"
          placeholder="Enter amount text"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-xl bg-gray-50"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-xl bg-gray-50"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <button
          onClick={convertCurrency}
          className="w-full bg-custom-yellow hover:bg-green-200 border-green-200 text-white font-semibold py-3 rounded-xl transition"
        >
          Convert
        </button>

        {convertedAmount !== null && (
          <div className="text-center text-lg font-semibold text-gray-700">
            {amount} {fromCurrency} ={" "}
            <span className="text-blue-600">{convertedAmount.toFixed(2)} {toCurrency}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverterPage;

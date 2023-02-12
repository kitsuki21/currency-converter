import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Block from "./Componets/Block";

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const dataRef = useRef({});

  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=E0hqkdxH5YqGa3JCeQNXXIvnKCSm4PCrQMuHEV3S"
    )
      .then((res) => res.json())
      .then((json) => {
        dataRef.current = json.data;
        onChangeToPrice(1);
      });
  }, []);

  function onChangeFromPrice(value) {
    const price = value / dataRef.current[fromCurrency];
    const result = price * dataRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  }

  function onChangeToPrice(value) {
    const result =
      (dataRef.current[fromCurrency] / dataRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
        dataRef={dataRef.current}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default App;

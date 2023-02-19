import React, { useEffect, useState } from "react";
import "./App.css";
import Block from "./Componets/Block";

function App() {
  const [fromCurrency, setFromCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState(1);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);
  const [listCurrensy, setListCurrensy] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=E0hqkdxH5YqGa3JCeQNXXIvnKCSm4PCrQMuHEV3S"
    )
      .then((res) => res.json())
      .then((json) => {
        setListCurrensy(Object.entries(json.data));
        console.log(Object.entries(json.data));
        console.log(json.data);

        onChangeToPrice(1);
      });
  }, []);

  const handleClickListItem = (index) => {
    const filterListCurrency = listCurrensy.filter((elem, id) => id !== index);
    filterListCurrency.unshift(listCurrensy[index]);
    setListCurrensy(filterListCurrency);
    setToCurrency(0);
  };

  function onChangeFromPrice(value) {
    if (listCurrensy.length) {
      const price = value / listCurrensy[fromCurrency][1];
      const result = price * listCurrensy[toCurrency][1];
      setToPrice(result.toFixed(3));
      console.log(value, price, result);
      setFromPrice(value);
    }
  }

  function onChangeToPrice(value) {
    if (listCurrensy.length) {
      const result =
        (listCurrensy[fromCurrency][1] / listCurrensy[toCurrency][1]) * value;
      setFromPrice(result.toFixed(3));
      setToPrice(value);
    }
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
        listCurrensy={listCurrensy}
        handleClickListItem={handleClickListItem}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
        listCurrensy={listCurrensy}
        handleClickListItem={handleClickListItem}
      />
    </div>
  );
}

export default App;

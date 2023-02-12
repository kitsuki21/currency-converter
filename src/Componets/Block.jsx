import React, { useState } from "react";
import "./block.css";
import arrow from "../img/arrow.svg";
import ListCurrency from "./currency/ListCurrency";

const Block = ({
  value,
  onChangeValue,
  currency,
  onChangeCurrency,
  dataRef,
}) => {
  const [show, setShow] = useState(false);
  const defaultCurrencyes = ["RUB", "USD", "EUR", "GBP"];

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="block">
      <div className="elem-block">
        <ul className="list-currency">
          {defaultCurrencyes.map((cur) => (
            <li
              onClick={() => onChangeCurrency(cur)}
              className={currency === cur ? "curency-active" : ""}
              key={cur}
            >
              {cur}
            </li>
          ))}
        </ul>
        <img
          className={`btn-arrow ${show ? "btn-arrow-active" : ""}`}
          src={arrow}
          alt="arrow"
          onClick={handleClick}
        />
      </div>

      <input
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type="number"
        placeholder={0}
      />
      {show && <ListCurrency dataRef={dataRef} />}
    </div>
  );
};

export default Block;

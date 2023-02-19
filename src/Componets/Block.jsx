import React, { useState } from "react";
import "./block.css";
import arrow from "../img/arrow.svg";
import ListCurrency from "./currency/ListCurrency";

const Block = ({
  value,
  onChangeValue,
  currency,
  onChangeCurrency,
  listCurrensy,
  handleClickListItem,
}) => {
  const [show, setShow] = useState(false);
  // const defaultCurrencyes = ["RUB", "USD", "EUR", "GBP"];

  const defaultCurrencyes = listCurrensy.slice(0, 4);
  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="block">
      <div className="elem-block">
        <ul className="list-currency">
          {defaultCurrencyes.map(([title], index) => (
            <li
              onClick={() => onChangeCurrency(index)}
              className={currency === index ? "curency-active" : ""}
              key={title}
            >
              {title}
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
      {show && (
        <ListCurrency
          listCurrensy={listCurrensy.slice(4)}
          handleClickListItem={handleClickListItem}
        />
      )}
    </div>
  );
};

export default Block;

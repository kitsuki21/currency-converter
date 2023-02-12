import React from "react";
import cl from "./ListCurrency.module.css";

const ListCurrency = ({ dataRef }) => {
  const currency = [];
  for (let key in dataRef) {
    currency.push(key);
  }
  return (
    <div className={cl.wrapper}>
      <ul className={cl.listCurrency}>
        {currency.map((cur) => (
          <li className={cl.listCurrencyElem}>{cur}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCurrency;

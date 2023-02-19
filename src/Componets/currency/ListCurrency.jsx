import React from "react";
import cl from "./ListCurrency.module.css";

const ListCurrency = ({ listCurrensy, handleClickListItem }) => {
  return (
    <div className={cl.wrapper}>
      <ul className={cl.listCurrency}>
        {listCurrensy.map(([title], index) => (
          <li
            onClick={() => handleClickListItem(index + 4)}
            className={cl.listCurrencyElem}
            key={title}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCurrency;

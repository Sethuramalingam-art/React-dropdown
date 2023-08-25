import React, { useState } from "react";
import data from "./country.json";
const Dropdown = () => {
  const [country, setCountry] = useState(data);
  const [stateList, setStateList] = useState(data[0].states);

  const handleChange = (event) => {
    let stateList = country.filter(
      (count) => count.name === event.target.value
    )[0].states;

    setStateList(stateList);
  };

  return (
    <>
      <div>
        <span>Country</span>
        <select onChange={handleChange}>
          {country.map((counData) => {
            return <option>{counData.name}</option>;
          })}
        </select>
      </div>
      <div>
        <span>State</span>
        <select>
          {stateList.map((counData) => {
            return <option>{counData.name}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;

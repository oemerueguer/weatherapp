import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  /* setting the state */
  const [data, setData] = useState([]);

  const onSetCities = (event) => {
    setData(event.target.value);
  };

  return (
    <>
      <h1 className="SearchHeading">Search for your desired city</h1>
      <div className="SearchContent">
        <input
          className="SearchField"
          onChange={onSetCities}
          maxLength="50"
          type="text"
          placeholder="Search city"
          value={data}
        />
        <Link
        className="SearchBtn"
          value={data}
          to={{
            pathname: "/weather",
            state: data,
          }}
        >
            Search
        </Link>
        <Link
        className="HomeBtn"
          to={{
            pathname: "/home",
          }}
        >
            Home
        </Link>
      </div>
    </>
  );
};
export default Search;

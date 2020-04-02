import React from "react";
import { MdSearch } from "react-icons/md";
import ml_logo from "./ml_logo.png";
import "./index.scss";
const Page = ({ handleSearch, filter, update, remove, suggestion }) => {
  const value = update;
  const searchRef = React.createRef();

  // send for index the given event
  const handleClick = e => {
    e.preventDefault();
    const { current } = searchRef;
    handleSearch(current.value);
  };

  // send for index the given filter or change
  const handleFilter = e => {
    e.preventDefault();
    const { current } = searchRef;
    filter(current.value);
    remove(current.value);
  };
  return (
    <div className="app-bar">
      <form>
        <img alt="Logo" className="app-bar--logo" src={ml_logo}></img>
        <input
          type="search"
          ref={searchRef}
          placeholder="Nunca dejes de buscar"
          className="app-bar--bar"
          onChange={handleFilter}
          value={value}
        />
        <button
          onClick={handleClick}
          className="app-bar--button"
          disabled={!suggestion}
        >
          <MdSearch />
        </button>
      </form>
    </div>
  );
};

export default Page;

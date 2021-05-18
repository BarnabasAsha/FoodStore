import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchProduct } from "../../services/productService";
import "./search.css";

const initialState = {
  status: false,
  results: [],
  loading: false,
};

const Search = () => {
  const [searchState, updateSearchState] = useState(initialState);
  const [formValue, updateFormValue] = useState('')

  const handleSearch = async (e) => {
    updateFormValue(e.target.value)
    updateSearchState({ ...searchState, loading: true, status: true });
    await searchProduct(formValue).then((result) => {
        if(!result) return
      const data = result.docs.map((obj) => obj.data());
      updateSearchState({ ...searchState, results: data, loading: false });
    });
  };

  const resetSearch = () => {
      setTimeout(() => {
        updateSearchState(initialState)
      }, 900)
  }

  return (
    <div className="navbar_search">
      <input
        value={formValue}
        type="text"
        onChange={handleSearch}
        onBlur={resetSearch}
        name="search"
        placeholder="Search for your foods and groceries"
      />
      {searchState.status ? (
        <ul className="search-results">
          {searchState.loading ? (
            <li>Loading...</li>
          ) : searchState.results.length ? (
            searchState.results.map((result) => {
              return (
                <li key={result.id}>
                  <Link to={`?product=${result.id}`}>
                    <span className="result-img">
                      <img src={result.prdImg} alt={result.prdName} />
                    </span>
                    <span className="result-name">{result.prdName}</span>
                  </Link>
                </li>
              );
            })
          ) : searchState.results.length < 1 ? (
            <li>Sorry we don't have that product at the moment</li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
};

export default Search;

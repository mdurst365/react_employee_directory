import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function SearchForm() {
  return (
    <form className="search">
      <div className="form-group mb-2">
        <label htmlFor="name">&nbsp; &nbsp; First Name: &nbsp; </label>
        <input
          placeholder="Type a name to begin"
        />
      &nbsp; &nbsp; <button type="submit" className="btn btn-primary mb-2">Search</button>
      </div>
      </form>

    )
  }

export default SearchForm;
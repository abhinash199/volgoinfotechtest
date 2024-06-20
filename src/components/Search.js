import React, { useState } from "react";
const Search = ({ records, setSearchResults }) => {
  //usestate hooks
  const [searchTerm, setSearchTerm] = useState("");

  //function to handle Search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Perform search filtering based on email
    const filteredResults = records.filter((record) =>
      record.email.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="search me-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search by Email Address"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;

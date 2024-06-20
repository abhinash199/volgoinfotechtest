// App.js

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataTable from "./components/DataTable";
import AddRecord from "./components/AddRecord";
import Details from "./components/Details";
import Search from "./components/Search";

const App = () => {
  // State to manage search results
  const [searchResults, setSearchResults] = useState([]);

  // Hardcoded initial data
  const [records, setRecords] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      address: "123 Main St, City A",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "9876543210",
      address: "456 Elm St, City B",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "1112223333",
      address: "789 Oak Ave, City C",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "4445556666",
      address: "321 Pine Rd, City D",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "7778889999",
      address: "555 Cedar Ln, City E",
    },
    // Add more initial records as needed
  ]);

  // Function to add a new record
  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  // Function to delete a record
  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          exact
          element={[
            <div className="wrapper">
              <Search records={records} setSearchResults={setSearchResults} />
              <AddRecord addRecord={addRecord} />
            </div>,
            <DataTable
              records={records}
              deleteRecord={deleteRecord}
              searchResults={searchResults}
            />,
          ]}
        />
        <Route path="/details/:id" element={<Details records={records} />} />
      </Routes>
    </div>
  );
};

export default App;

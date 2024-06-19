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
  const [showCreateBtn, setshowCreateBtn] = useState(true);

  // Hardcoded initial data
  const [records, setRecords] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City A",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, City B",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "111-222-3333",
      address: "789 Oak Ave, City C",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "444-555-6666",
      address: "321 Pine Rd, City D",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "777-888-9999",
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

  function handleClick() {
    setshowCreateBtn(!showCreateBtn);
  }
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          exact
          element={[
            <div
              className="wrapper"
              style={{ flexDirection: `${showCreateBtn ? "row" : "column"}` }}
            >
              <Search records={records} setSearchResults={setSearchResults} />
              ,
              <AddRecord
                addRecord={addRecord}
                showCreateBtn={showCreateBtn}
                handleClick={handleClick}
              />
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

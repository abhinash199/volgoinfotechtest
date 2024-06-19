import React from "react";
import { Link } from "react-router-dom";

const DataTable = ({ records, deleteRecord, searchResults }) => {
  const displayRecords = searchResults.length > 0 ? searchResults : records;

  return (
    <div className="datatable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>
                {" "}
                <Link to={`/details/${record.id}`}>Details</Link>
              </td>
              <td>
                <button onClick={() => deleteRecord(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

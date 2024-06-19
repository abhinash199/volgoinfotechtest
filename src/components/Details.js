
import React from "react";
//react-router-dom
import { useParams } from "react-router-dom";

const Details = ({ records }) => {
    //get id from url
  const { id } = useParams();
  
  //fetch record from id
  const record = records.find((record) => record.id === parseInt(id));

  return (
    <div className="details">
      <h2>Record Details</h2>
      {record ? (
        <div>
          <p>
            <strong>Name:</strong> {record.name}
          </p>
          <p>
            <strong>Email:</strong> {record.email}
          </p>
          <p>
            <strong>Phone:</strong> {record.phone}
          </p>
          <p>
            <strong>Address:</strong> {record.address}
          </p>
        </div>
      ) : (
        <p>No record found.</p>
      )}
    </div>
  );
};

export default Details;

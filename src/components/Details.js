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
      {record ? (
        <div class="card mx-auto" style={{ width: "22rem" }}>
          <div class="card-body">
            <h5 class="card-title fw-bold text-center mb-3">Record Details</h5>
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
        </div>
      ) : (
        <p className="text-center">No record found.</p>
      )}
    </div>
  );
};

export default Details;

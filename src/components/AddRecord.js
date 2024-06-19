import React, { useState } from "react";
const AddRecord = ({ addRecord, showCreateBtn, handleClick }) => {
  //usestate hooks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { name, email, phone, address } = formData;

  //add data to state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //function to handle add record 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: Date.now(), // Temporary ID generation
      name,
      email,
      phone,
      address,
    };
    addRecord(newRecord);
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <>
      {showCreateBtn ? (
        <button onClick={handleClick}>CREATE</button>
      ) : (
        <div className="add-record">
          <h2>Add New Record</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Record</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddRecord;

import React, { useState } from "react";
const AddRecord = ({ addRecord}) => {
  //usestate hooks
  const [showSuccessMsg, setshowSuccessMsg] = useState(false);
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
    setshowSuccessMsg(true);
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
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setshowSuccessMsg(false)}
      >
        CREATE
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <form onSubmit={handleSubmit}>
              <div class="modal-header">
                {showSuccessMsg ? (
                  <h2 className="text-success fs-5 fw-normal">
                    Record Add Successfully
                  </h2>
                ) : (
                  <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
                    Add New Record
                  </h1>
                )}

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  className="form-control mb-3 mb-3"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control mb-3"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-success">
                  Add Record
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRecord;

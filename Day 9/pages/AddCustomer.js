import React from 'react';
import './AddCustomer.css'; // Import your CSS file

function AddCustomer() {
  return (
    <div id="body-add">

    <div id="container-cus">
      <div className="title">Add Customer</div>
      <div className="content">
        <form action="#" id="form">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Customer Name</span>
              <input type="text" placeholder="Enter Customer name" required />
            </div>
            <div className="input-box">
              <span className="details">Customer Number</span>
              <input type="number" placeholder="Enter Customer Number" required />
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" placeholder="Enter Customer Address" required />
            </div>
            <div className="input-box">
              <span className="details">Doctor's Name</span>
              <input type="text" placeholder="Doctor's Name" required />
            </div>
            <div className="input-box">
              <span className="details">Doctor's Address</span>
              <input type="text" placeholder="Doctor's Address" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Add Customer" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddCustomer;

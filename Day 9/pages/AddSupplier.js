import React from 'react';
import './AddSupplier.css'; // Import your CSS file

function AddSupplier() {
  return (
    <div id="body-add">

    <div id="container-sup">
      <div className="title">Add Supplier</div>
      <div className="content">
        <form action="#" id="form">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Supplier Name</span>
              <input type="text" placeholder="Supplier Name" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="email" placeholder="Supplier Email" required />
            </div>
            <div className="input-box">
              <span className="details">Contact Number</span>
              <input type="text" placeholder="Contact Number" required />
            </div>
            <div className="input-box">
              <span className="details">Address</span>
              <input type="text" placeholder="Address" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Add Supplier" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddSupplier;

import React from 'react';
import './AddMedicine.css'; // Import your CSS file

function AddMedicine() {
  return (
    <div id="body-add">

    <div id="container-med">
      <div className="title">Add Medicine</div>
      <div className="content">
        <form action="#" id="form">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Medicine Name</span>
              <input type="text" placeholder="Medicine name" required />
            </div>
            <div className="input-box">
              <span className="details">Packing:</span>
              <input type="text" placeholder="Packing eg. 10 TAB" required />
            </div>
            <div className="input-box">
              <span className="details">Generic Name</span>
              <input type="text" placeholder="Generic Name" required />
            </div>
            <div className="input-box">
              <span className="details">Supplier</span>
              <input type="text" placeholder="Supplier Name" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Add Medicine" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddMedicine;

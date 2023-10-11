import React from 'react';
import './AddPurchase.css'; // Import your CSS file

function AddPurchase() {
  return (
    <div id="body-add">

    <div id="container-pur">
      <div className="title">Add Purchases</div>
      <div className="content">
        <form action="#" id="form">
          <div className="user-details">
            <div className="input-box">
              <span className="details"> Name</span>
              <input type="text" placeholder="Supplier name" required />
            </div>
            <div className="input-box">
              <span className="details">Supplier Number</span>
              <input type="number" placeholder="Supplier Number" required />
            </div>
            <div className="input-box">
              <span className="details">Medicine name</span>
              <input type="text" placeholder="Medicine Name" required />
            </div>
            <div className="input-box">
              <span className="details">Packing</span>
              <input type="text" placeholder="Packing(eg: 10 TAB)" required />
            </div>
            <div className="input-box">
              <span className="details">Ex.Date(mm/yy)</span>
              <input type="text" placeholder="Date(mm/yy)" required />
            </div>
            <div className="input-box">
              <span className="details">Rate</span>
              <input type="number" placeholder="Rate(Rs.)" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Add Purchases" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddPurchase;

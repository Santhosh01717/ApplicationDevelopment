import React, { useEffect } from 'react';
import './AddSupplier.css'; // Import your CSS file
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import supplierService from './supplierService';

function AddSupplier() {
  const nav = useNavigate();
  const [supplierName, setSupplierName] = useState('');
  const [supplierEmail, setSupplierEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const { id } = useParams();

  const handleSupplierNameChange = (e) => {
    setSupplierName(e.target.value);
  };

  const handleSupplierEmailChange = (e) => {
    setSupplierEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const saveOrUpdateSupplier = (e) => {
    e.preventDefault();
    if (supplierName.length === 0 || supplierEmail.length === 0 || contactNumber.length === 0 || address.length === 0) {
      alert('Enter All fields');
    } else {
      if (window.confirm('Confirm Details!') === true) {
        const supplier = { id, supplierName, supplierEmail, contactNumber, address };

        if (id) {
          supplierService.updateMedicine(id, supplier)
            .then((response) => {
              nav('/supplier');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          supplierService.createSupplier(supplier)
            .then((response) => {
              console.log(response.data);
              nav('/supplier');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  useEffect(() => {
    supplierService.getSupplierById(id)
      .then((response) => {
        setSupplierName(response.data.supplierName);
        setSupplierEmail(response.data.supplierEmail);
        setContactNumber(response.data.contactNumber);
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h1>Update Supplier</h1>;
    } else {
      return <h1>Add Supplier</h1>;
    }
  };

  return (
    <div id="body-add">
      <div id="container-sup">
        <div className="title">{title()}</div>
        <div className="content">
          <form action="#" id="form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Supplier Name</span>
                <input
                  type="text"
                  placeholder="Supplier Name"
                  value={supplierName}
                  onChange={handleSupplierNameChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Supplier Email"
                  value={supplierEmail}
                  onChange={handleSupplierEmailChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Contact Number</span>
                <input
                  type="text"
                  placeholder="Contact Number"
                  value={contactNumber}
                  onChange={handleContactNumberChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={handleAddressChange}
                  required
                />
              </div>
            </div>
            <div className="button">
              <input onClick={saveOrUpdateSupplier} type="submit" value="Add Supplier" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSupplier;

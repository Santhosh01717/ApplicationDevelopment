import React, { useEffect } from 'react';
import './AddCustomer.css'; // Import your CSS file
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import CustomerService from './CustomerService';

const AddCustomer = () => {
  const nav = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorAddress, setDoctorAddress] = useState('');
  const { id } = useParams();

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleCustomerNumberChange = (e) => {
    setCustomerNumber(e.target.value);
  };

  const handleCustomerAddressChange = (e) => {
    setCustomerAddress(e.target.value);
  };

  const handleDoctorNameChange = (e) => {
    setDoctorName(e.target.value);
  };
  
  const handleDoctorAddressChange = (e) => {
    setDoctorAddress(e.target.value);
  };

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();
    if (customerName.length === 0 || customerNumber.length === 0 || customerAddress.length === 0 || doctorName.length === 0 || doctorAddress.length === 0) {
      alert('Enter All fields');
    } else {
      if (window.confirm('Confirm Details!') === true) {
        const customer = { id, customerName, customerNumber, customerAddress, doctorName, doctorAddress };
        
        if (id) {
          CustomerService.updateCustomer(id, customer)
            .then((response) => {
              nav('/customer');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          CustomerService.createCustomer(customer)
            .then((response) => {
              console.log(response.data);
              nav('/customer');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  useEffect(() => {
    CustomerService.getCustomerById(id)
      .then((response) => {
        setCustomerName(response.data.customerName);
        setCustomerNumber(response.data.customerNumber);
        setCustomerAddress(response.data.customerAddress);
        setDoctorName(response.data.doctorName);
        setDoctorAddress(response.data.doctorAddress);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h1>Update Customer</h1>;
    } else {
      return <h1>Add Customer</h1>;
    }
  };

  return (
    <div id="body-add">
      <div id="container-cus">
        <div className="title">{title()}</div>
        <div className="content">
          <form action="#" id="form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Customer Name</span>
                <input
                  type="text"
                  placeholder="Enter Customer name"
                  value={customerName}
                  onChange={handleCustomerNameChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Customer Number</span>
                <input
                  type="text"
                  placeholder="Enter Customer Number"
                  value={customerNumber}
                  onChange={handleCustomerNumberChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  placeholder="Enter Customer Address"
                  value={customerAddress}
                  onChange={handleCustomerAddressChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Doctor's Name</span>
                <input
                  type="text"
                  placeholder="Doctor's Name"
                  value={doctorName}
                  onChange={handleDoctorNameChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Doctor's Address</span>
                <input
                  type="text"
                  placeholder="Doctor's Address"
                  value={doctorAddress}
                  onChange={handleDoctorAddressChange}
                  required
                />
              </div>
            </div>
            <div className="button">
              <input onClick={saveOrUpdateCustomer} type="submit" value="Add Customer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;

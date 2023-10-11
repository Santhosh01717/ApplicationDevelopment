import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/lab';
import CustomerService from './CustomerService';
import './login.css';
import './Customer.css';
import axios from 'axios';
const Home = () => {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [customer, setCustomer] = useState([])
  useEffect(() => {
      getAllCustomer();
  }, [currentPage,sortBy,sortOrder])

  const getAllCustomer = () => {
      axios.get(`http://localhost:8080/newcustomer/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setCustomer(response.data)
      setTotalPages(totalPages);
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteCustomer = (customerId) => {
    if(window.confirm("Sure to Delete?")){
      CustomerService.deleteCustomer(customerId).then((response) =>{
      getAllCustomer();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllCustomer= () => {
    if(window.confirm("Sure to Delete All Customers?")){
      CustomerService.deleteAllCustomer().then((response) =>{
      getAllCustomer();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
      nav("/home");
    
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <body id="whole">
        <div id="container">
          <h1>Pharmacy Management System</h1>
          <Link to="/addCustomer"><button id="addbtn">Add Customer</button></Link>
          <button id="delbtn" onClick={deleteAllCustomer}>Delete All</button>

          <table id="table">
            <thead>
              <tr>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} id="first-col" onClick={() => handleSort('id')}>
                  Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                 Customer Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>
                 Customer Number {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>
                 Customer Address {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>
                 Doctor's Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>
                Doctor's Address {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>Actions</th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>details</th>
              </tr>
            </thead>
            <tbody>
              {customer.content && customer.content.map(
                (customer) => (
                  <tr key={customer.id}>
                    <th id="id"> {customer.id}</th>
                    <th id="name"> {customer.customerName}</th>
                    <th id="name"> {customer.customerNumber}</th>
                    <th id="name"> {customer.customerAddress}</th>
                    <th id="name"> {customer.doctorName}</th>
                    <th id="name"> {customer.doctorAddress}</th>
                    <th id="action">
                      <Link to={`/update/${customer.id}`}><button id="actions">Update</button></Link>
                      <button id="action-del" onClick={() => deleteCustomer(customer.id)}>Delete!</button>
                    </th>
                    <th id="view-details">
                      <Link to={`/customer/:id${customer.id}`}>
                        <button>view details</button>
                      </Link>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>

          <Pagination className='page'
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
          <button id="logout" onClick={LogoutHandler}>Back</button>
        </div>
      </body>
    </>
  );
};

export default Home;

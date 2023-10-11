import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/lab';
import './login.css';
import './Supplier.css'
import supplierService from './supplierService';
import axios from 'axios';

const Home = () => {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [supplier, setSupplier] = useState([])
  useEffect(() => {
      getAllSupplier();
  }, [currentPage,sortBy,sortOrder])

  const getAllSupplier = () => {
      axios.get(`http://localhost:8080/supplier/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setSupplier(response.data)
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

  const deleteSupplier = (supplierId) => {
    if(window.confirm("Sure to Delete?")){
      supplierService.deleteSupplier(supplierId).then((response) =>{
      getAllSupplier();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllSupplier= () => {
    if(window.confirm("Sure to Delete All Supplier?")){
      supplierService.deleteAllSupplier().then((response) =>{
      getAllSupplier();

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
          <Link to="/addSupplier"><button id="addbtn">Add Supplier</button></Link>
          <button id="delbtn" onClick={deleteAllSupplier}>Delete All</button>

          <table id="table">
            <thead>
              <tr>
              <th style={{ backgroundColor: "rgb(155, 200, 202)" }} id="first-col" onClick={() => handleSort('id')}>
                  ID {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} id="first-col" onClick={() => handleSort('id')}>
                  Supplier Name {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                  Supplier Email{sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                 Contact Number{sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>Actions</th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>details</th>
              </tr>
            </thead>
            <tbody>
              {supplier.content && supplier.content.map(
                (supplier) => (
                  <tr key={supplier.id}>
                    <th id="id"> {supplier.id}</th>
                    <th id="name"> {supplier.supplierName}</th>
                    <th id="name"> {supplier.supplierEmail}</th>
                    <th id="name"> {supplier.contactNumber}</th>
                    
                    <th id="action">
                      <Link to={`/update/${supplier.id}`}><button id="actions">Update</button></Link>
                      <button id="action-del" onClick={() => deleteSupplier(supplier.id)}>Delete!</button>
                    </th>
                    <th id="view-details">
                      <Link to={`/supplier/:id${supplier.id}`}>
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

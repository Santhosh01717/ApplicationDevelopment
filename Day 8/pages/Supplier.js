import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/lab';
import './login.css';
import './Supplier.css'

const Home = () => {
  const nav = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [employees, setEmployees] = useState([]);

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteEmployee = (employeeId) => {
    if (window.confirm("Sure to Delete?")) {
      // Replace this with your own delete employee logic
      // You should implement the backend API call here
    }
  };

  const deleteAllEmployee = () => {
    if (window.confirm("Sure to Delete All Employees?")) {
      // Replace this with your own delete all employees logic
      // You should implement the backend API call here
    }
  };

  const LogoutHandler = () => {
    if (window.confirm("Sure to Logout?")) {
      nav("/");
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <body id="whole">
        <div id="container">
          <h1>Pharmacy Management System</h1>
          <Link to="/addSupplier"><button id="addbtn">Add Supplier</button></Link>
          <button id="delbtn" onClick={deleteAllEmployee}>Delete All</button>

          <table id="table">
            <thead>
              <tr>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} id="first-col" onClick={() => handleSort('id')}>
                  Supplier Name {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                  Supplier Email{sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                 Contact Number{sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                 Address{sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>Actions</th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>details</th>
              </tr>
            </thead>
            <tbody>
              {employees.content && employees.content.map(
                (employee) => (
                  <tr key={employee.id}>
                    <th id="id"> {employee.id}</th>
                    <th id="name"> {employee.name}</th>
                    <th id="action">
                      <Link to={`/update/${employee.id}`}><button id="actions">Update</button></Link>
                      <button id="action-del" onClick={() => deleteEmployee(employee.id)}>Delete!</button>
                    </th>
                    <th id="view-details">
                      <Link to={`/employees/:id${employee.id}`}>
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
          <button id="logout" onClick={LogoutHandler}>Logout</button>
        </div>
      </body>
    </>
  );
};

export default Home;

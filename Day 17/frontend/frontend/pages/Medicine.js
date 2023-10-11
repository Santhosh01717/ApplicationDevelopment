import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/lab';
import axios from 'axios';
import MedicineService from './MedicineService';
import './login.css';
import './Medicine.css'

const Home = () => {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [medicine, setMedicine] = useState([])
  useEffect(() => {
      getAllMedicine();
  }, [currentPage,sortBy,sortOrder])

  const getAllMedicine = () => {
      axios.get(`http://localhost:8080/medicine/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setMedicine(response.data)
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

  const deleteMedicine = (medicineId) => {
    if(window.confirm("Sure to Delete?")){
    MedicineService.deleteMedicine(medicineId).then((response) =>{
      getAllMedicine();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllMedicine= () => {
    if(window.confirm("Sure to Delete All Medicines?")){
     MedicineService.deleteAllMedicine().then((response) =>{
      getAllMedicine();

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
          <Link to="/addMedicine"><button id="addbtn">Add Medicine</button></Link>
          <button id="delbtn" onClick={deleteAllMedicine}>Delete All</button>

          <table id="table">
            <thead>
              <tr>
              <th style={{backgroundColor: "rgb(155, 200, 202)"}} id="first-col" onClick={() => handleSort('id')}>Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')  }</th>

                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} id="first-col" onClick={() => handleSort('id')}>
                  Medicine Name {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                  Packing {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                 Generic Name  {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }} onClick={() => handleSort('name')}>
                 Supplier Name  {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>Actions</th>
                <th style={{ backgroundColor: "rgb(155, 200, 202)" }}>details</th>
              </tr>
            </thead>
            <tbody>
              {medicine.content && medicine.content.map(
                (medicine) => (
                  <tr key={medicine.id}>
                    <th id="id"> {medicine.id}</th>
                    <th id="name"> {medicine.medicineName}</th>
                    <th id="name"> {medicine.packing}</th>
                    <th id="name"> {medicine.genericName}</th>
                    <th id="name"> {medicine.supplierName}</th>

                    <th id="action">
                      <Link to={`/update/${medicine.id}`}><button id="actions">Update</button></Link>
                      <button id="action-del" onClick={() => deleteMedicine(medicine.id)}>Delete!</button>
                    </th>
                    <th id="view-details">
                      <Link to={`/medicine/:id${medicine.id}`}>
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

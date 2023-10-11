import React from 'react';
import './AddMedicine.css'; // Import your CSS file
import MedicineService from './MedicineService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddMedicine = () => {
  const nav = useNavigate();
  const [medicineName, setMedicineName] = useState('');
  const [packing, setPacking] = useState('');
  const [genericName, setGenericName] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const { id } = useParams();

  const handleMedicineNameChange = (e) => {
    setMedicineName(e.target.value);
  };

  const handlePackingChange = (e) => {
    setPacking(e.target.value);
  };

  const handleGenericNameChange = (e) => {
    setGenericName(e.target.value);
  };

  const handleSupplierNameChange = (e) => {
    setSupplierName(e.target.value);
  };

  const saveOrUpdateMedicine = (e) => {
    e.preventDefault();
    if (medicineName.length === 0 || packing.length === 0 || genericName.length === 0 || supplierName.length === 0) {
      alert('Enter All fields');
    } else {
      if (window.confirm('Confirm Details!') === true) {
        const medicine = { id, medicineName, packing, genericName, supplierName };
        
        if (id) {
          MedicineService.updateMedicine(id, medicine)
            .then((response) => {
              nav('/medicine');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          MedicineService.createMedicine(medicine)
            .then((response) => {
              console.log(response.data);
              nav('/medicine');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  useEffect(() => {
    MedicineService.getMedicineById(id)
      .then((response) => {
        setMedicineName(response.data.medicineName);
        setPacking(response.data.packing);
        setGenericName(response.data.genericName);
        setSupplierName(response.data.supplierName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const title = () => {
    if (id) {
      return <h1>Update Medicine</h1>;
    } else {
      return <h1>Add Medicine</h1>;
    }
  };

  return (
    <div id="body-add">
      <div id="container-med">
        <div className="title">{title()}</div>
        <div className="content">
          <form action="#" id="form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Medicine Name</span>
                <input
                  type="text"
                  placeholder="Medicine name"
                  value={medicineName}
                  onChange={handleMedicineNameChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Packing:</span>
                <input
                  type="text"
                  placeholder="Packing eg. 10 TAB"
                  value={packing}
                  onChange={handlePackingChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Generic Name</span>
                <input
                  type="text"
                  placeholder="Generic Name"
                  value={genericName}
                  onChange={handleGenericNameChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Supplier</span>
                <input
                  type="text"
                  placeholder="Supplier Name"
                  value={supplierName}
                  onChange={handleSupplierNameChange}
                  required
                />
              </div>
            </div>
            <div className="button">
              <input onClick={saveOrUpdateMedicine} type="submit" value="Add Medicine" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;

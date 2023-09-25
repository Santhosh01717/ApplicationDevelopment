import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import Myhomepage from './pages/Myhomepage';
import Reports from './pages/Reports';
import Footer from './components/footer';
import Login from './login/login';
import Signup from './Signup/Signup';
import Customer from '../src/pages/Customer'
import Myhomepage1 from './pages/MyhomePage1';
import AddCustomer from './pages/AddCustomer';
import Medicine from './pages/Medicine';
import AddMedicine from './pages/AddMedicine';
import Supplier from './pages/Supplier';
import AddSupplier from './pages/AddSupplier';
import AddPurchase from './pages/AddPurchase';
import Purchase from './pages/Purchase'
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Myhomepage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/register' element={<Signup/>} />
          <Route path='/addCustomer' element={<AddCustomer/>} />
          <Route path='/addMedicine' element={<AddMedicine/>} />
          <Route path='/addSupplier' element={<AddSupplier/>} />
          <Route path='/addPurchase' element={<AddPurchase/>} />
          <Route path='/home' element={<Myhomepage1 />} />
          <Route path='/medicine' element={<Medicine />} />
          <Route path='/supplier' element={<Supplier />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="/faq" element={<FAQ/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;

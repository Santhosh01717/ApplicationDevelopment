import './App.css';
import './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.js';
import Signup from './Signup';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
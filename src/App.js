import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>React JS CRUD Operations</h1>
        <Routes>
          <Route path ='/' element = {<EmpListing/>}></Route>
          <Route path ='/employee/create' element = {<EmpCreate/>}></Route>
          <Route path ='/employee/detail/:empid' element = {<EmpDetail/>}></Route>
          <Route path ='/employee/edit/:empid' element = {<EmpEdit/>}></Route>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

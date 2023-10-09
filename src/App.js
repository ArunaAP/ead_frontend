import React from 'react';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';
import AddForm from './components/AddForm/AddForm';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      {/* <Navbar />
      <Dashboard /> */}
      {/* <Login /> */}
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;

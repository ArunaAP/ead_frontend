import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Make an API request to fetch employees
    axios
      .get('https://localhost:7049/api/Employee')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div>
      <h3>Employee List</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Employee Role</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <th scope="row">{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.empRole}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

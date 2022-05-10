import React from "react";
import Employee from "./Employee";
import { useState } from "react";

const EmployeeList = () => {

 const [employees, setEmployees] = useState([
      {id:1, name: 'Semih Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
      {id:1, name: 'Sevde Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
      {id:1, name: 'Misha Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
      {id:1, name: 'Pera Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
      {id:1, name: 'Deniz Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'}
  ])

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

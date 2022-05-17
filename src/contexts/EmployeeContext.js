import { createContext, useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        {id:uuidv4(), name: 'Semih Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
        {id:uuidv4(), name: 'Sevde Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
        {id:uuidv4(), name: 'Misha Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
        {id:uuidv4(), name: 'Pera Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'},
        {id:uuidv4(), name: 'Deniz Örscelik', email: 'semih@mail.com', address: 'Mozart str.', phone: '(0171)3598741'}
    ])

    useEffect(() => {
        const employees = localStorage.getItem('employees')
        setEmployees(JSON.parse(employees))
    }, [])

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    })

   const sortedEmployees = employees.sort((a,b) => a.name.localeCompare(b.name))

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, {id:uuidv4(), name, email, address, phone}])
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }
    
    
    return (
        <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}} >
           {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;
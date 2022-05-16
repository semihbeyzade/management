import React, { useContext, useState, useEffect} from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
 }, [employee])

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button onClick={handleShow} className="btn text-warning" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          className="btn text-danger"
          onClick={() => deleteEmployee(employee.id)}
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal show={show} onHide={handleClose} >
          <Modal.Header className="modal-header" closeButton >
              <Modal.Title>
                  Update Employee
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <EditForm theEmployee={employee} />
          </Modal.Body>
          <Modal.Footer>
            <Button  variant="secondary" onClick={handleClose} >
                Close Modal
            </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;

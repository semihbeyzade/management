import {Form, Button, FormGroup} from 'react-bootstrap'
 import { EmployeeContext } from '../contexts/EmployeeContext'; 
import { useContext} from 'react';



const EditForm = () => {

    const {updateEmployee} = useContext(EmployeeContext);


    return(
       <Form >

        <FormGroup>
            <Form.Control 
            type='text' 
            placeholder='Name *' 
            name="name"
           
            required 
            />

            
        </FormGroup>

        <FormGroup>
            <Form.Control 
            type='email' 
            placeholder='Email *'
           
            name="email"
          
            required 
            />
        </FormGroup>

        <FormGroup>
        <Form.Control 
            as='textarea' 
            placeholder='Address *' 
            name="address"
            
       
            rows={3}
            />
        </FormGroup>

        <FormGroup>
        <Form.Control 
            type='text' 
            placeholder='Phone'
            name="phone"
          
             
            />
        </FormGroup>

        <Button variant="success" type="submit" block>
           Update Employee
        </Button>

       </Form>
    )
}

export default EditForm;
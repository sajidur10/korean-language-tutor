import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <Form className='w-75 mx-auto my-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5'>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" />
                <Form.Text className="text-muted">
                    We'll never share your info with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fs-5'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fs-5'>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fs-5'>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button className='mb-5' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Checkout;
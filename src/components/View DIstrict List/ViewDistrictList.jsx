import React from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

function ViewDistrictList() {
    return (
        <>
            <Container>
                <Form className='text-dark shadow bg-white p-2 mb-4  mt-4 needs-validation'>
                    <h5><b>View District List</b></h5>
                    <Row>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Course Nmae</th>
                                            <th>Counselling Fee</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>1</p>
                                            </td>
                                            <td>
                                                <p>PCM</p>
                                            </td>
                                            <td>
                                                <p>5000</p>
                                            </td>
                                            <td>
                                                <Row>
                                                    <Form.Group className='d-flex justify-content-center align-items-center'>
                                                        <Button variant="danger">Remove</Button>
                                                    </Form.Group>
                                                </Row>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <p>1</p>
                                            </td>
                                            <td>
                                                <p>PCM</p>
                                            </td>
                                            <td>
                                                <p>5000</p>
                                            </td>
                                            <td>
                                                <Row>
                                                    <Form.Group className='d-flex justify-content-center align-items-center'>
                                                        <Button variant="danger">Remove</Button>
                                                    </Form.Group>
                                                </Row>
                                            </td>

                                        </tr>
                                    </tbody>
                                </Table>

                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container >
        </>
    )
}

export default ViewDistrictList
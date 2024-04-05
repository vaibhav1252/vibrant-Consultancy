import React from 'react'
import { Container, Form, Row, Col, Button, Dropdown, Table } from 'react-bootstrap'

function AddServiceCard() {
    return (
        <>
            <Container>
                <Form className='text-dark border bg-white mt-4 p-2 mb-4 needs-validation'>
                    <h5><b>Add Service Card</b></h5>
                    <Row className='p-0 m-0'>
                        <Col className='col-md-3'>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Faculty Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Faculty Name" />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-3'>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control required type="text" placeholder="Contact No." />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Profile</Form.Label>
                                <Form.Control type="file" />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='p-0 m-0 mt-2'>
                        <Col className='col-md-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Aadhar No.</Form.Label>
                                <Form.Control required type="text" placeholder="Aadhar No." />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>user Name</Form.Label>
                                <Form.Control required type="text" placeholder="user Name" />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>District</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle className='bg-white text-dark text-start' id="dropdown-basic">
                                        Select District
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Latur</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Pune</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Mumbai</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Solapur</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Nashik</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Sambhaji Nagar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Jalna</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Satara</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className='d-flex justify-content-left align-items-center mt-2'>
                            <Button variant="primary">Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>

            <Container>
                <Form className='text-dark border bg-white mt-4 p-2 mb-4 needs-validation'>
                    <Row>
                        <h5><b>View District List</b></h5>
                    </Row>
                    <Row className='p-0 m-0 mt-2'>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Search By</b></Form.Label>
                                <Form.Control required type="text" placeholder="Search By" />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Staff Name</th>
                                            <th>Contact.</th>
                                            <th>Profile</th>
                                            <th>District</th>
                                            <th>User Name</th>
                                            <th>Status</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        <tr>
                                            <td>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                                                    <Dropdown>
                                                    <Dropdown.Toggle className='bg-white text-dark text-start' id="dropdown-basic">
                                                        Select
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Neet</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Grade 2</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="Enter Application Number" />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="Enter Roll No." />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="Enter Year of Passing" />
                                                </Form.Group>
                                            </td>
                                            <td>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="Enter Marks" />
                                                </Form.Group>
                                            </td>

                                        </tr>
                                    </tbody> */}
                                </Table>

                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default AddServiceCard
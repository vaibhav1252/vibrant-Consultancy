import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function AddCourseCard() {
    return (
        <>
            <Container>
                <Form className='text-dark shadow bg-white mt-4 p-2 mb-4 needs-validation'>
                    <h5><b>Add Course's Card</b></h5>
                    <Row className='p-0 m-0'>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Course Name</b></Form.Label>
                                <Form.Control type="text" placeholder="Course Name" />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='p-0 m-0 mt-2'>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Counselling Fees</b></Form.Label>
                                <Form.Control required type="text" placeholder="Counselling Fees" />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className='d-flex justify-content-left align-items-center mt-2 m-3'>
                            <Button variant="primary">Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default AddCourseCard
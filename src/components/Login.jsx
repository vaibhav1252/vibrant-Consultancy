import React from 'react'
import { Container, Row, Form, Button, Card, Col } from 'react-bootstrap'

function Login() {
    return (
        <>
            <Container fluid className="vh-100 bg-light">

                <Row className=" h-100 p-3">
                    <Col className="col-md-6 p-3 d-flex flex-column justify-content-center align-items-center">
                        <h1>Vibrant</h1>
                        <h2>Admission Guidance</h2>
                        <h2>M.B. Patil Education Pvt Ltd</h2>
                    </Col>

                    <div class="col-md-6 p-3 d-flex justify-content-center align-items-center">

                        <Card style={{ width: '20rem' }} className='shadow bg-secondary text-light'>
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Mobile No.</Form.Label>
                                        <Form.Control type="email" placeholder="Contact No." />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Password.</Form.Label>
                                        <Form.Control type="email" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className='d-flex justify-content-center align-items-center'>
                                        <Button variant="primary">Primary</Button>
                                    </Form.Group>
                                    <Form.Group className='d-flex justify-content-between align-items-center pt-3'>
                                        <p>Forget Password?</p>
                                        <p>New Registration</p>
                                    </Form.Group>
                                    <Form.Group className='d-flex flex-column justify-content-center align-items-center'>
                                        <p>Privacy Policy</p>
                                        <p>FAQ and Cancellation Policy </p>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>


                    </div>
                </Row>
            </Container >
        </>
    )
}

export default Login
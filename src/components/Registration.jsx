import React from 'react'
import { Container, Row, Col, Form, Dropdown, Table, Button } from 'react-bootstrap'

function Registration() {

    const isAlpha = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[a-zA-Z]*$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }
    const isDate = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d{2})$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }
    const isEmail = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            status = false;
        }
        else {   // console.log(element);
            // console.log(element.getAttribute("message"));
            status = true;
        }

        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }

    const isNum = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;
            status = true;
        } else if (e.target.value.match(/^[0-9]+$/)) {
            status = false;
        }
        else {
            status = true;
        }
        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }
    const isAdd = (e) => {
        let element = e.target;
        let status, emptyMessage = false;

        if (element.value.length == 0) {
            emptyMessage = true;

            status = true;
        } else if (e.target.value.match(/^[a-zA-Z0-9\s\,\''\-]*$/)) {
            status = false;
        }
        else {
            status = true;
        }
        if (!status) {
            element.nextSibling.classList.remove('d-block');
            element.nextSibling.classList.add('d-none');
            element.classList.add('is-valid');
            element.classList.remove('is-invalid');
        }
        else {
            element.classList.add('is-invalid');
            element.classList.remove('is-valid');
            element.nextSibling.classList.add('d-block');
            element.nextSibling.classList.remove('d-none');
            emptyMessage ? element.nextSibling.innerHTML = "this field should not be Empty" : element.nextSibling.innerHTML = element.getAttribute("message");
        }
    }


    return (
        <>
            <Container>
                <Form className='text-dark border bg-white p-2 mb-4 needs-validation'>
                    <h3 className='text-center'>M.B.Patil</h3>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name="firstName" message="please Enter valid first name" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Middle Name" name="MiddleName" message="please Enter valid Middle name" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>

                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Last Name" name="LastName" message="please Enter valid Last name" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mothers Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mothers Name" name="MotherName" message="please Enter valid Mother name" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Contact No." name="Date" message="please Enter valid Date" onChange={isDate} onBlur={isDate} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Caste</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle className='bg-white text-dark w-100 text-start' id="dropdown-basic">
                                        Select Cast
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Open</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">OBC 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">SBC 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">SC 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">ST 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">NT-B 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">NT-C 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">NT-D 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Enter Category" name="category" message="please Enter valid category" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Label>Gender</Form.Label>
                            <div className='col-md-4 d-flex justify-content-start align-items-center'>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="male"
                                    value="male"
                                />
                                <Form.Check className='mx-4 col-md-4'
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="female"
                                    value="female"
                                />
                            </div>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Aadhar No.</Form.Label>
                                <Form.Control type="text" placeholder="Enter Aadhar No." name="AadharNo." message="please Enter valid AadharNo." onChange={isNum} onBlur={isNum} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Student Mobile No.</Form.Label>
                                <Form.Control type="text" placeholder="Enter Student Mobile No" name="phoneNo." message="please Enter valid phoneNo." onChange={isNum} onBlur={isNum} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Parents Mobile No.</Form.Label>
                                <Form.Control type="text" placeholder="Enter Parents Mobile No" name="phoneNo." message="please Enter valid phoneNo." onChange={isNum} onBlur={isNum} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" message="please Enter valid email" onChange={isEmail} onBlur={isEmail} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Address" name="category" message="please Enter valid address" onChange={isAdd} onBlur={isEmail} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>District</Form.Label>
                                <Form.Control type="text" placeholder="Enter District" name="District" message="please Enter valid District" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" placeholder="Enter Pincode" name="Pincode" message="please Enter valid Pincode" onChange={isNum} onBlur={isNum} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter State" name="State" message="please Enter valid State" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter Country" name="Country" message="please Enter valid Country" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name of College</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name of College" name="College" message="please Enter valid College Name" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Students Photo</Form.Label>
                                <Form.Control type="file" placeholder="Contact No." name="photo" message="please import proper file" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <h4>Details of all ENTERANCE Exam successfully qualified/passed</h4>
                    </Row>
                    <Row>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Class/Grade</th>
                                            <th>Application Number</th>
                                            <th>Roll No.</th>
                                            <th>Year of Passing</th>
                                            <th>Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                    </tbody>
                                </Table>

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className='d-flex justify-content-center align-items-center'>
                            <Button variant="primary">Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container >
        </>
    )
}

export default Registration
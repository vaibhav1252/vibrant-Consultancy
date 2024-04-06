import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function AddCourseCard() {

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

    return (
        <>
            <Container>
                <Form className='text-dark shadow bg-white mt-4 p-2 mb-4 needs-validation'>
                    <h5><b>Add Course's Card</b></h5>
                    <Row className='p-0 m-0'>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Course Name</b></Form.Label>
                                <Form.Control type="text" placeholder="Course Name" name="CourseName" message="please Enter valid Course name" onChange={isAlpha} onBlur={isAlpha} />
                                <div className='invalid-feedback d-none'>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='p-0 m-0 mt-2'>
                        <Col className='col-md-12'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><b>Counselling Fees</b></Form.Label>
                                <Form.Control required type="text" placeholder="Counselling Fees" name="Counselling Fees." message="please Enter valid fees." onChange={isNum} onBlur={isNum} />
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
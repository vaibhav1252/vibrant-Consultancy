import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ViewDistrictList from '../View DIstrict List/ViewDistrictList'
import AddCourseCard from '../Add Course Card/AddCourseCard'

function Courses() {
    return (
        <Container>
            <Row className='mt-4'>
                <Col className="col-md-6"><AddCourseCard /></Col>

                <Col className="col-md-6"><ViewDistrictList /></Col>


            </Row>
        </Container>
    )
}

export default Courses
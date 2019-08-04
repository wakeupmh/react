import React from 'react'
import {Container,Row, Col, InputGroup, FormControl} from 'react-bootstrap'
export default props =>
    <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs='12' sm='9' md='10'>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl type='text' aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
            </Row> 
        </Container>
    </div>

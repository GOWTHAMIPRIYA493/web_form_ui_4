import React from 'react';
import './apiCall.css';
import {Container, Row, Col, Dropdown, DropdownButton, Form, Button} from 'react-bootstrap';
import { useState, useRef } from 'react';
import { apiCallFunc } from './apiFunction';

const ApiCall = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [apiResponse, setApiResponse] = useState('');
  
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const formRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await apiCallFunc(selectedOption, inputValue);
            const data = await response.data;
            setApiResponse(data);
        } catch (error) {
            console.error(error);
        }
    };


  return (
    <section className='landing-ui'>
        <h1 className='heading'><span className='sub-txt'>CRUD</span> your data here!</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
        <Container className='cont'>
            <Row className='cont-row'>
                <Col>
                    <h5 className='prop-title'>Choose option</h5>
                </Col>
                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Select operation" onSelect={handleOptionSelect}>
                        <Dropdown.Item eventKey="GET">GET</Dropdown.Item>
                        <Dropdown.Item eventKey="PUT">PUT</Dropdown.Item>
                        <Dropdown.Item eventKey="DELETE">DELETE</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>

            <Row className='cont-row'>
                <Col>
                    <h5 className='prop-title'>Enter parameter/data</h5>
                </Col>
                <Col>
                    <Form.Control as="textarea" rows={4} size='lg' className='placehold' value={inputValue} onChange={handleInputChange}/>
                </Col>
            </Row>

        </Container>
        <div className="d-flex justify-content-center">
            <Button type='submit'>Get response</Button>
        </div>
        </form>
        <div className="api-response">
            {apiResponse && <pre>{JSON.stringify(apiResponse, null, 2)}</pre>}
        </div>
    </section>
  )
}

export default ApiCall
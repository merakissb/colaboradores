import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Dictionary from '../utils/dictionary/es';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center pb-3">
        <Col sm={6}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder={Dictionary.searchBar.placeholder}
              className="me-2 rounded-pill"
              aria-label="Search"
              value={inputValue}
              onChange={handleChange}
            />
            <Button
              className="rounded-pill"
              variant="primary"
              disabled={!inputValue.trim()}
            >
              {Dictionary.buttons.search}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
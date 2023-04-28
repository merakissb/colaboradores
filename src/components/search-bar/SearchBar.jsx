import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Dictionary from '../utils/dictionary/es';

const SearchBar = ({ onSearch })  => {

  const handleChange = (event) => {
    const searchValue = event.target.value;
    onSearch(searchValue);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center pb-3">
        <Col sm={6}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={Dictionary.searchBar.placeholder}
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
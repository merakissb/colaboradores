import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Dictionary from '../utils/dictionary/es';

const PartnerForm = ({ onSubmit }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputEmail, setInputEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit({ name: inputName, email: inputEmail });
      setInputName('');
      setInputEmail('');
    }
  };

  const validateForm = () => inputName.trim() !== '' && inputEmail.trim() !== '';

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>{Dictionary.form.fields.name.label}</Form.Label>
        <Form.Control className='mb-3'
          type='text'
          placeholder={Dictionary.form.fields.name.placeholder}
          value={inputName}
          onChange={({ target: { value } }) => setInputName(value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>{Dictionary.form.fields.email.label}</Form.Label>
        <Form.Control className='mb-3'
          type='email'
          placeholder={Dictionary.form.fields.email.placeholder}
          value={inputEmail}
          onChange={({ target: { value } }) => setInputEmail(value)}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!validateForm()}>
        {Dictionary.buttons.submit}
      </Button>
    </Form>
  );
}

export default PartnerForm;
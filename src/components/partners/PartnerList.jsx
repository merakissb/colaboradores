import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Dictionary from '../utils/dictionary/es';

const PartnerList = ({ partners }) => {

  const displayPartner = (partner) => {
    return `${partner.name} - ${partner.email}`;
  };

  return (
    <div className='PartnerList mt-5'>
      <h2>{Dictionary.list.title}</h2>
      <ListGroup>
        {partners.map((partner) => (
          <ListGroup.Item className='border-0 p-0' key={partner.id}>
            {displayPartner(partner)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default PartnerList;
import React, { useState } from 'react';
import PartnerForm from './PartnerForm';
import PartnerList from './PartnerList';
import { partnersData } from './data/partnersData';
import { addPartnerService } from './services/addPartnerService';
import { Container } from 'react-bootstrap';
import SearchBar from '../search-bar/SearchBar';
import Dictionary from '../utils/dictionary/es';

const PartnerContainer = () => {
  const [partners, setPartners] = useState(partnersData);

  const handleAddPartner = (newPartner) => {
    setPartners([...partners, newPartner]);
  };

  const handleSubmit = (partner) => {
    handleAddPartner(partner)
    addPartnerService(partner)
  };

  return (
    <Container fluid>
      <SearchBar />
        <h3 className='mb-4'>{Dictionary.container.title}</h3>
        <PartnerForm onSubmit={handleSubmit} />
        <PartnerList partners={partners} />
    </Container>
  );
}

export default PartnerContainer;
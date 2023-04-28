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
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPartner = (newPartner) => {
    setPartners([...partners, newPartner]);
  };

  const handleSubmit = (partner) => {
    handleAddPartner(partner)
    addPartnerService(partner)
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };


  const filteredPartners = partners.filter((partner) => {
    const partnerName = partner.name.toLowerCase();
    const partnerEmail = partner.email.toLowerCase();
    const search = searchTerm.toLowerCase();

    return partnerName.includes(search) || partnerEmail.includes(search);
  });


  return (
    <Container fluid>
      <SearchBar onSearch={handleSearch} />
        <h3 className='mb-4'>{Dictionary.container.title}</h3>
        <PartnerForm onSubmit={handleSubmit} />
        <PartnerList partners={filteredPartners} />
    </Container>
  );
}

export default PartnerContainer;
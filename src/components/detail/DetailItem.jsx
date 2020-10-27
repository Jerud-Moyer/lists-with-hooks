import React from 'react';
import PropTypes from 'prop-types';

const DetailItem = ({ name, image, status, species, gender, origin }) => (
  <>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <ul>
      <li>status: {status}</li>
      <li>species: {species}</li>
      <li>gender: {gender}</li>
      <li>origin: {origin.name}</li>
    </ul>
  </>
);

DetailItem.propTypes = {
  
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
  
};

export default DetailItem;

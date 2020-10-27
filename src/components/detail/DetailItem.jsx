import React from 'react';
import PropTypes from 'prop-types';

const DetailItem = ({ characterDetail }) => (
  <>
    <h1>{characterDetail.name}</h1>
    <img src={characterDetail.image} alt={name} />
    <ul>
      <li>status: {characterDetail.status}</li>
      <li>species: {characterDetail.species}</li>
      <li>gender: {characterDetail.gender}</li>
      <li>origin: {characterDetail.origin.name}</li>
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

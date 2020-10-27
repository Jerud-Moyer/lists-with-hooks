import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <>
    <img src={image} alt={name} />
    <h1>{name}</h1>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;

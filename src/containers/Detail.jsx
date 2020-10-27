import React, { useState, useEffect } from 'react';
import DetailItem from '../components/detail/DetailItem';
import { fetchCharById } from '../services/character-api';
import PropTypes from 'prop-types';

const Detail = props => {
  const [loading, setLoading] = useState(true);
  const [characterDetail, setCharacterDetail] = useState({});
  // const characterId = props.match.params.id;

  useEffect(() => {
    fetchCharById(props.match.params.id)
      .then(characterDetail => setCharacterDetail(characterDetail))
      .finally(() => setLoading(false));
  }, []);

  console.log(characterDetail);

  if(loading) return <h1 data-testid="loading">Loading.1.2.3.</h1>;

  return (
    <div>
      <DetailItem characterDetail={characterDetail} />s
    </div>
  );

};

Detail.propTypes = {
  match: PropTypes.object.isRequired
};

export default Detail;

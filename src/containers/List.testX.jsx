import React from 'react';
import { findByTestId, render, screen, waitFor } from '@testing-library/react';
import List from './list';
import { getCharacters } from '../services/character-api';

jest.mock('../services/character-api');

describe('list container', () => {
  it('displays a loading message', () => {
      
    getCharacters.mockResolvedValue([
      {
        image: 'https://rickandmortyapi.com/rick/image',
        name: 'Rick Sanchez'
      },
      {
        image: 'https://rickandmortyapi.com/rick/image',
        name: 'Morty Smith'
      }
  
    ]);
    render(<List />);

    const loading = screen.getByTestId('loading');
    expect(loading).toHaveTextContent('Loading.1.2.3.');
  });
});

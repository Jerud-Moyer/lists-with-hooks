import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(<Character
      image="Test Image"
      name="test Nameu"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

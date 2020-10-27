import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailItem from './DetailItem';

describe('DetailItem component', () => {
  afterEach(() => cleanup());

  it('renders DetailItem', () => {
    const { asFragment } = render(<DetailItem
      characterDetail={}
      name="test Name"
      status="test Status"
      species="test Species"
      genfder="test Gender"
      origin="test Origin"
      image="test Image"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { OfferPackage } from './OfferPackage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    type: '',
    header: '',
    description: '',
    price: '',
  };
  const element = (
    <OfferPackage props={props} />
  );
  ReactDOM.render(element, div);
});

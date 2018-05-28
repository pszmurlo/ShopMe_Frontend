import React from 'react';
import ReactDOM from 'react-dom';
import { OfferDetails } from './OfferDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    service: {
      title: '',
      user: '',
      baseDescription: '',
      basePrice: '',
      extendedDescription: '',
      extendedPrice: '',
      extraDescription: '',
      extraPrice: '',
    },
  };
  const element = (
    <OfferDetails service={props.service} />
  );
  ReactDOM.render(element, div);
});

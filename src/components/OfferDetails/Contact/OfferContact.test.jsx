import React from 'react';
import ReactDOM from 'react-dom';
import { OfferContact } from './OfferContact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    service: {
      email: '',
      phoneNumber: '',
    },
  };
  const element = (
    <OfferContact service={props.service} />
  );
  ReactDOM.render(element, div);
});

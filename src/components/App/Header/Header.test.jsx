import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    location: {},
  };
  const element = (
    <MemoryRouter>
      <Header location={props.location} />
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});

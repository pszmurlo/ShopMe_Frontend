import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    children: [],
  };
  const element = (
    <MemoryRouter>
      <ScrollToTop>{props.children}</ScrollToTop>
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});

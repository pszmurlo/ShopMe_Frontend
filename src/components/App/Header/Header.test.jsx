import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

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

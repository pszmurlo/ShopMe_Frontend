import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import HomeScreen from 'screens/Home/Home';
import { Layout } from './Layout';

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
    children: {
      type: {
        name: 'dummy',
      },
    },
  };
  const element = (
    <MemoryRouter>
      <Layout location={props.location}>
        <HomeScreen />
      </Layout>
    </MemoryRouter>
  );
  ReactDOM.render(element, div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SuccessRegisterMessage from './SuccessRegisterMessage';

describe('SuccessMessage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      location: {
        state: {},
      },
    };
    const element = (
      <MemoryRouter>
        <SuccessRegisterMessage location={props.location} />
      </MemoryRouter>
    );
    ReactDOM.render(element, div);
  });

  it('displays a success message', () => {
    const successMessage = shallow(<SuccessRegisterMessage />);
    expect(successMessage.find('.success-register-message__text').text()).toEqual('components.register.successRegisterMessage');
  });
});

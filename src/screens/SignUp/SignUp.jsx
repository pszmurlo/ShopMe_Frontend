import React from 'react';
import { translate } from 'react-i18next';
import SignupForm from 'components/SignupForm/SignupForm';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmailExists: false,
    };
    this.checkIsEmailExists = this.checkIsEmailExists.bind(this);
  }

  checkIsEmailExists(emailValue) {
    const { http } = this.props;
    return http.get(`/api/users/email=${emailValue}`)
      .then((res) => {
        if (res) this.setState({ isEmailExists: res });
      });
  }

  render() {
    return (
      <SignupForm onSubmit={this.checkIsEmailExists} isEmailExists={this.state.isEmailExists} />
    );
  }
}

export { SignUpScreen };
export default translate()(SignUpScreen);

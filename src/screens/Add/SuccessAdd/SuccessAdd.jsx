import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import SuccessMessage from 'components/Add/SuccessMessage/SuccessMessage';

class SuccessAddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    setTimeout(this.handleRedirect, 3000);
  }

  handleRedirect() {
    this.setState({ fireRedirect: true });
  }

  render() {
    const offerId = this.props.location.responseId;
    return (
      <div>
        { this.state.fireRedirect && <Redirect to={{ pathname: `/offer/${offerId}` }} />}
        <SuccessMessage />
      </div>
    );
  }
}

export { SuccessAddScreen };
export default translate()(SuccessAddScreen);

import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router';
import Header from 'components/App/Header/Header';
import Footer from 'components/App/Footer/Footer';
import AppError from 'components/App/Error/Error';
import ForbiddenError from 'components/App/Forbidden/Forbidden';
import httpHelper from './http.helper';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        token: localStorage.getItem('userToken'),
        name: localStorage.getItem('userName'),
        surname: localStorage.getItem('userSurname'),
      },
      hasError: false,
      fireRedirect: false,
      forbidden: false,
    };
    this.http = {
      get: (...rest) => httpHelper.get(...rest).catch(this.displayError),
      post: (...rest) => httpHelper.post(...rest).catch(this.displayError),
    };
    this.setUser = this.setUser.bind(this);
    this.displayError = this.displayError.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.isRequireAuthorization();
  }

  componentWillReceiveProps() {
    this.displayError(false);
    this.resetRequirements();
  }

  setUser(token, name, surname) {
    this.setState({ user: { token, name, surname } });
  }

  displayError(hasError) {
    this.setState({ hasError });
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userSurname');
    this.setUser({ fireRedirect: true });
  }

  isRequireAuthorization() {
    const { children } = this.props;
    if (children.props.requiresAuthorization &&
      this.state.user.token === null) {
      this.setState({ forbidden: true });
    } else {
      this.setState({ forbidden: false });
    }
  }

  resetRequirements() {
    this.setState({ forbidden: false });
  }

  render() {
    const { children } = this.props;
    const childProps = {
      setUser: this.setUser,
      displayError: this.displayError,
      http: this.http,
    };
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) return React.cloneElement(child, childProps);
      return child;
    });

    let content;
    if (this.state.forbidden) {
      content = <ForbiddenError />;
    } else if (this.state.hasError) {
      content = <AppError />;
    } else {
      content = childrenWithProps;
    }

    return (
      <div className="wrapper">
        {this.state.fireRedirect && <Redirect to="/" />}
        <div className="content">
          <Header
            userName={this.state.user.name}
            userSurname={this.state.user.surname}
            onClick={this.logout}
          />
          <main className={this.props.className}>
            {content}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Layout };
export default translate()(Layout);

import React from 'react';
import { Redirect } from 'react-router';
import { translate } from 'react-i18next';
import SearchInput from 'components/Search/SearchForm/SearchInput';
import './SearchForm.css';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: this.props.phrase,
      isValidPhrase: false,
      fireRedirect: false,

    };

    this.handleSearchInputChanged = this.handleSearchInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchPhrase = this.updateSearchPhrase.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.state.isValidPhrase) this.setState({ fireRedirect: true });
  }

  handleSearchInputChanged(phrase, isValidPhrase) {
    this.setState({
      phrase, isValidPhrase,
    }, () => {
      this.updateSearchPhrase(phrase, isValidPhrase);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isValidPhrase === false) return;
    this.onSubmit(this.state.phrase);
  }

  updateSearchPhrase(phrase, isValidPhrase) {
    this.setState({
      phrase,
      isValidPhrase,
    });
  }

  render() {
    if (this.state.fireRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/search',
            search: `?title=${this.state.phrase}&page=1`,
          }}
        />
      );
    }
    return (
      <div className={this.props.isHomepage ? 'search__wrapper-home' : 'search__wrapper'}>
        {this.props.isHomepage ? <h1 className="search__header">{this.props.t('components.searchForm.header')}</h1> : null}
        <form className="search__form">
          <SearchInput
            onSearchInputChanged={this.handleSearchInputChanged}
            handleSubmit={this.handleSubmit}
            phrase={this.state.phrase}
          />
        </form>
      </div>
    );
  }
}

export { SearchForm };
export default translate()(SearchForm);

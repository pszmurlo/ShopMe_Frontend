import React from 'react';
import { translate } from 'react-i18next';
import SubmitButton from 'components/UI/SubmitButton/SubmitButton';
import './SearchInput.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidPhrase: false,
      errorMessage: null,
      phrase: props.phrase,
      matchRegex: undefined,
    };
    this.validatePhrase = this.validatePhrase.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    if (this.state.phrase) {
      this.validatePhrase(this.state.phrase);
    }
  }

  handleInputChange(input) {
    const phrase = input.target.value;
    this.setState({ phrase });
    this.validatePhrase(phrase.trim());
  }

  validatePhrase(phrase) {
    const matchRegex = /^[A-ZĄĘĆŁŃÓŚŹŻ0-9\s]*$/i.test(phrase);
    this.setState({ matchRegex });
    if (matchRegex) {
      const isValidPhrase = phrase.length > 1 && Number.isNaN(Number(phrase));

      this.setState({ isValidPhrase });
      if (isValidPhrase && phrase !== '') {
        this.props.onSearchInputChanged(phrase, isValidPhrase);
        this.setState({ errorMessage: null });
      } else if (!Number.isNaN(Number(phrase)) && phrase !== '') {
        this.props.onSearchInputChanged(null, isValidPhrase);
        this.setState({ errorMessage: 'components.searchForm.numberError' });
      } else {
        this.props.onSearchInputChanged(null, isValidPhrase);
        this.setState({ errorMessage: 'components.searchForm.lengthError' });
      }
    } else {
      this.props.onSearchInputChanged(null, matchRegex);
      this.setState({ errorMessage: 'components.searchForm.illegalError' });
    }
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.handleInputChange(event);
    }
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="search__input-wrapper">
          <input
            type="text"
            id="search__input"
            placeholder={t('components.searchForm.input')}
            name="searchPhrase"
            onChange={this.handleInputChange}
            onKeyDown={this.handleEnter}
            className="search__form-item"
            maxLength="30"
            aria-label={t('components.searchForm.label')}
            value={this.state.phrase || ''}
          />
          <SubmitButton onClick={this.props.handleSubmit} phrase={this.props.phrase} className="form__button--submit">
            {this.props.t('components.searchForm.button')}
          </SubmitButton>
          <SubmitButton onClick={this.props.handleSubmit} phrase={this.props.phrase} className="form__button--lens" />
        </div>
        {(!this.state.isValidPhrase || !this.state.matchRegex) && (<p className="search__message-error">{t(this.state.errorMessage)}</p>)}
      </div>
    );
  }
}

export { SearchInput };
export default translate()(SearchInput);

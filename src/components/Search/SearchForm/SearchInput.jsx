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
    const cleanedSearchPhrase = phrase.replace(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}!@#$%^&*()=+\-_;:'"<>,.?/{}|`~[\]\\]/ug, '');
    const isValidPhrase = cleanedSearchPhrase.length > 1
      && Number.isNaN(Number(cleanedSearchPhrase));

    this.setState({ isValidPhrase });
    if (isValidPhrase && Number.isNaN(Number(cleanedSearchPhrase)) && cleanedSearchPhrase !== '') {
      this.props.onSearchInputChanged(cleanedSearchPhrase, isValidPhrase);
      this.setState({ errorMessage: null });
    } else if (!Number.isNaN(Number(cleanedSearchPhrase)) && cleanedSearchPhrase !== '') {
      this.props.onSearchInputChanged(null, isValidPhrase);
      this.setState({ errorMessage: 'components.searchForm.numberError' });
    } else {
      this.props.onSearchInputChanged(null, isValidPhrase);
      this.setState({ errorMessage: 'components.searchForm.lengthError' });
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
        {!this.state.isValidPhrase && (<p className="search__message-error">{t(this.state.errorMessage)}</p>)}
      </div>
    );
  }
}

export { SearchInput };
export default translate()(SearchInput);

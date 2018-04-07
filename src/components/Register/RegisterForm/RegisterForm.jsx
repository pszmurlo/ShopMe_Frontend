import React, { Component } from 'react';
import { translate } from 'react-i18next';
import TextInput from 'components/UI/TextInput/TextInput';
import FormButton from 'components/UI/FormButton/FormButton';
import InvoiceInputGroup from 'components/UI/InvoiceInputGroup/InvoiceInputGroup';
import PersonalDataConfirm from 'components/UI/PersonalDataConfirm/PersonalDataConfirm';

import './Register.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { t } = this.props;
    return (
      <form className="register-form">
        <fieldset className="register-form__fieldset">
          <div className="register-form__icon-container">
            <i className="register-form__icon register-form__icon--signup fas fa-user-plus" />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__name"
              type="text"
              label={t('components.login.register.firstNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__surname"
              type="text"
              label={t('components.login.register.lastNameInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__email"
              type="text"
              label={t('components.login.register.emailInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__password"
              type="password"
              label={t('components.login.register.passwordInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__confirm-password"
              type="password"
              label={t('components.login.register.confirmPasswordInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__phone-number"
              type="text"
              label={t('components.login.register.phoneNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__bank-account"
              type="text"
              label={t('components.login.register.bankAccountInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__address-street"
              type="text"
              label={t('components.login.register.streetInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__address-number"
              type="text"
              label={t('components.login.register.houseNumberInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__address-city"
              type="text"
              label={t('components.login.register.localityInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <div className="register-form__item">
            <TextInput
              name="users__address-zip-code"
              type="text"
              label={t('components.login.register.zipCodeInputLabel')}
              color="yellow"
              size="M"
              maxLength="50"
              required
            />
          </div>
          <InvoiceInputGroup />
          <div className="register-form__item register-form__item--button">
            <FormButton
              id="users__register-submit"
              type="submit"
              value={t('components.login.signup.submitButtonLabel')}
            />
          </div>
          <div className="register-form__item--checkbox">
            <PersonalDataConfirm />
          </div>
        </fieldset>
      </form>
    );
  }
}

export { RegisterForm };
export default translate()(RegisterForm);

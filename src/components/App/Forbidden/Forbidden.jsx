import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Forbidden.css';

const ForbiddenError = (props) => {
  const { t } = props;
  return (
    <section className="forbidden__main-wrapper">
      <div className="forbidden__exclamation">!</div>
      <div className="forbidden__text-wrapper">
        <h1 className="forbidden__text">{t('components.forbidden.text')}</h1>
        <Link href="/login" to="/login" className="forbidden__login-link">{t('components.forbidden.link')}</Link>
      </div>
    </section>
  );
};

export { ForbiddenError };
export default translate()(ForbiddenError);

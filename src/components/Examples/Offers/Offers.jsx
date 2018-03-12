import React from 'react';
import { translate } from 'react-i18next';

const ExampleOffers = (props) => {
  return (<pre>
    {props.offers.map((offer, i) => {
      return <div key={i}>{offer.date}, {offer.title}</div>
    })}
  </pre>)
};

export { ExampleOffers };
export default translate()(ExampleOffers);

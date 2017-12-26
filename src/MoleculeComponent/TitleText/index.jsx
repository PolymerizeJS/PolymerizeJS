import React from 'react';
import PropTypes from 'prop-types';

import SecondaryText from '../../AtomComponent/SecondaryText';
import SmallText from '../../AtomComponent/SmallText';

import './style.scss';

function TitleText({ children }) {
  return (
    <section className="title-text">
      <SecondaryText>
        {children.primaryTextContent}
      </SecondaryText>
      <SmallText>
        {children.secondaryTextContent}
      </SmallText>
    </section>
  );
}

TitleText.defaultProps = {
  children: {
    primaryTextContent: '',
    secondaryTextContent: '',
  },
};

TitleText.propTypes = {
  children: PropTypes.shape({
    primaryTextContent: PropTypes.string,
    secondaryTextContent: PropTypes.string,
  }),
};

export default TitleText;

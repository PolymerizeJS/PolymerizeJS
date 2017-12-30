import React from 'react';
import PropTypes from 'prop-types';

import SecondaryText from '../../AtomComponent/SecondaryText';
import SmallText from '../../AtomComponent/SmallText';
import MediumButton from '../../AtomComponent/MediumButton';
import MediumLink from '../../AtomComponent/MediumLink';

import './style.scss';

function TitleTextButton({ children }) {
  return (
    <section className="title-text-button">
      <SecondaryText>
        {children.primaryTextContent}
      </SecondaryText>
      <SmallText>
        {children.secondaryTextContent}
      </SmallText>
      {
        children.buttonName !== '' &&
        <MediumButton>
          {children.buttonName}
        </MediumButton>
      }
      {
        children.linkName !== '' &&
        <MediumLink button>
          {children.linkName}
        </MediumLink>
      }
    </section>
  );
}

TitleTextButton.defaultProps = {
  children: {
    primaryTextContent: '',
    secondaryTextContent: '',
    buttonName: '',
  },
};

TitleTextButton.propTypes = {
  children: PropTypes.shape({
    primaryTextContent: PropTypes.string,
    secondaryTextContent: PropTypes.string,
    buttonName: PropTypes.string,
  }),
};

export default TitleTextButton;

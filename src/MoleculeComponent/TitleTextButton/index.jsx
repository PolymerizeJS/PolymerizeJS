import React from 'react';
import PropTypes from 'prop-types';

import SmallText from '../../AtomComponent/SmallText';
import SmallButton from '../../AtomComponent/SmallButton';
import SmallLink from '../../AtomComponent/SmallLink';
import SecondaryText from '../../AtomComponent/SecondaryText';

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
        <SmallButton>
          {children.buttonName}
        </SmallButton>
      }
      {
        children.linkName !== '' &&
        <SmallLink button>
          {children.linkName}
        </SmallLink>
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

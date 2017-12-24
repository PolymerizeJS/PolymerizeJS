import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumAnchor from '../../AtomComponent/MediumAnchor';

import './style.scss';

function TitleTextButton({ children }) {
  return (
    <section className="title-text-button">
      <MediumText>
        {children.primaryTextContent}
      </MediumText>
      <SmallText>
        {children.secondaryTextContent}
      </SmallText>
      <MediumAnchor>
        {children.buttonName}
      </MediumAnchor>
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

import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumLink from '../../AtomComponent/MediumLink';
import MediumButton from '../../AtomComponent/MediumButton';

import './style.scss';

function CallToAction({ children }) {
  return (
    <section className="call-to-action">
      <MediumText>
        {children.primaryTextContent}
      </MediumText>
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
        <MediumLink>
          {children.linkName}
        </MediumLink>
      }
    </section>
  );
}

CallToAction.defaultProps = {
  children: {
    primaryTextContent: '',
    secondaryTextContent: '',
    anchorName: '',
    buttonName: '',
  },
};

CallToAction.propTypes = {
  children: PropTypes.shape({
    primaryTextContent: PropTypes.string,
    secondaryTextContent: PropTypes.string,
    anchorName: PropTypes.string,
    buttonName: PropTypes.string,
  }),
};

export default CallToAction;

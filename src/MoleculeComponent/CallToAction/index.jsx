import React from 'react';
import PropTypes from 'prop-types';

import SmallText from '../../AtomComponent/SmallText';
import SmallLink from '../../AtomComponent/SmallLink';
import SmallButton from '../../AtomComponent/SmallButton';
import MediumText from '../../AtomComponent/MediumText';

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

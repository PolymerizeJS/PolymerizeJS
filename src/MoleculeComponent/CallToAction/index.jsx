import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumAnchor from '../../AtomComponent/MediumAnchor';

import './style.scss';

function CallToAction({ primaryTextContent, secondaryTextContent, buttonName }) {
  return (
    <section className="call-to-action">
      <MediumText>
        {primaryTextContent}
      </MediumText>
      <SmallText>
        {secondaryTextContent}
      </SmallText>
      <MediumAnchor>
        {buttonName}
      </MediumAnchor>
    </section>
  );
}

CallToAction.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  buttonName: '',
};

CallToAction.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  buttonName: PropTypes.string,
};

export default CallToAction;

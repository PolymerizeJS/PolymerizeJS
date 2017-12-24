import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumAnchor from '../../AtomComponent/MediumAnchor';

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
      <MediumAnchor>
        {children.buttonName}
      </MediumAnchor>
    </section>
  );
}

CallToAction.defaultProps = {
  children: {
    primaryTextContent: '',
    secondaryTextContent: '',
    buttonName: '',
  },
};

CallToAction.propTypes = {
  children: PropTypes.shape({
    primaryTextContent: PropTypes.string,
    secondaryTextContent: PropTypes.string,
    buttonName: PropTypes.string,
  }),
};

export default CallToAction;

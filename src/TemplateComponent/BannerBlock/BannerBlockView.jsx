import React from 'react';
import PropTypes from 'prop-types';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';
import PrimaryText from '../../AtomComponent/PrimaryText';

// style
import './style.scss';

function BannerBlockView({ primaryTextContent, secondaryTextContent, buttonName }) {
  return (
    <section className="banner-block">
      <PrimaryText className="logo">
        Polymerize
      </PrimaryText>
      <CallToAction>
        {{
          primaryTextContent,
          secondaryTextContent,
          buttonName,
        }}
      </CallToAction>
    </section>
  );
}

BannerBlockView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  buttonName: '',
};

BannerBlockView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BannerBlockView;

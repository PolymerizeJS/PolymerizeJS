import React from 'react';
import PropTypes from 'prop-types';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';
import PrimaryText from '../../AtomComponent/PrimaryText';

// style
import './style.scss';

function BannerBlockView({ primaryTextContent, secondaryTextContent, anchorName, buttonName }) {
  return (
    <section className="banner-block">
      <PrimaryText className="logo">
        Polymerize
      </PrimaryText>
      <CallToAction>
        {{
          primaryTextContent,
          secondaryTextContent,
          anchorName,
          buttonName,
        }}
      </CallToAction>
    </section>
  );
}

BannerBlockView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  anchorName: '',
  buttonName: '',
};

BannerBlockView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  anchorName: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BannerBlockView;

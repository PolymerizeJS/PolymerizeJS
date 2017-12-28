import React from 'react';
import PropTypes from 'prop-types';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';

// style
import './style.scss';

function BannerBlockView({ primaryTextContent, secondaryTextContent, anchorName, buttonName }) {
  return (
    <section className="banner-block">
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

import React from 'react';
import PropTypes from 'prop-types';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';

// style
import './style.scss';

function BannerBlockView({ primaryTextContent, secondaryTextContent, linkName, buttonName }) {
  return (
    <section className="banner-block">
      <CallToAction>
        {{
          primaryTextContent,
          secondaryTextContent,
          linkName,
          buttonName,
        }}
      </CallToAction>
    </section>
  );
}

BannerBlockView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  linkName: '',
  buttonName: '',
};

BannerBlockView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  linkName: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BannerBlockView;

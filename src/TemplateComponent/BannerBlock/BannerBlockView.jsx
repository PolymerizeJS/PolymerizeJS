import React from 'react';
import PropTypes from 'prop-types';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';
import FullWidthImg from '../../AtomComponent/FullWidthImg';
import PrimaryText from '../../AtomComponent/PrimaryText';

// style
import './style.scss';

// assets
import AlineaImg from '../../assets/placeholder.jpeg';
import BannerBlock from './BannerBlock';

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

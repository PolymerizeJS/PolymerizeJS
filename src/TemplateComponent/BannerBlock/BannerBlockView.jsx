import React from 'react';
import PropTypes from 'prop-types';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';
import FullWidthImg from '../../AtomComponent/FullWidthImg';
import PrimaryText from '../../AtomComponent/PrimaryText';

// action
import BannerBlockAction from './BannerBlockAction';

// style
import './style.scss';

// assets
import AlineaImg from '../../assets/placeholder.jpeg';
import BannerBlock from './BannerBlock';

function BannerBlockView({ dispatch, primaryTextContent, secondaryTextContent, buttonName }) {
  dispatch(BannerBlockAction(
    'Styled and configurable templates with reusable components to enable software engineers to create elegant product',
    'Polymerize is created after seeing many talented software engineers struggling to come up with initial UI layout.',
    'Github',
  ));
  return (
    <section className="banner-block-container">
      <div className="banner-container">
        <PrimaryText className="logo">
          Polymerize
        </PrimaryText>
        <CallToAction
          primaryTextContent={primaryTextContent}
          secondaryTextContent={secondaryTextContent}
          buttonName={buttonName}
        />
      </div>
      {/* <div className="bb-right-container">
        <FullWidthImg src={`dist/${AlineaImg}`} alt="apollo template" />
      </div> */}
    </section>
  );
}

BannerBlockView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  buttonName: '',
};

BannerBlockView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BannerBlockView;

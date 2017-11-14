import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Shared/Logo/Logo';
import PrimaryText from '../../Shared/PrimaryText/PrimaryText';
import SecondaryText from '../../Shared/SecondaryText/SecondaryText';
import SmallButton from '../../Shared/SmallButton/SmallButton';
import LeftSectionBg from '../../../assets/apollo/img/left-section-bg.jpg';
// style import
import './BannerLeftStyle.scss';

function BannerLeft({ logo, primaryText, secondaryText, smallButton }) {
  return (
    <section
      className="banner-left"
      style={{
        backgroundImage: `url("./dist/${LeftSectionBg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <Logo logoContent={logo} />
      <PrimaryText primaryTextContent={primaryText} />
      <SecondaryText secondaryTextContent={secondaryText} />
      <SmallButton smallButtonContent={smallButton} />
    </section>
  );
}

BannerLeft.propTypes = {
  logo: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  smallButton: PropTypes.string.isRequired,
};

export default BannerLeft;

import React from 'react';
import Logo from '../../Shared/Logo/Logo';
import PrimaryText from '../../Shared/PrimaryText/PrimaryText';
import SecondaryText from '../../Shared/SecondaryText/SecondaryText';
import SmallButton from '../../Shared/SmallButton/SmallButton';
import LeftSectionBg from '../../../assets/apollo/img/left-section-bg.jpg';
// style import
import './BannerContentLeftStyle.scss';

function BannerContentLeft() {
  return (
    <section
      className="banner-content-left"
      style={{
        backgroundImage: `url("./dist/${LeftSectionBg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <Logo />
      <PrimaryText />
      <SecondaryText />
      <SmallButton />
    </section>
  );
}

export default BannerContentLeft;

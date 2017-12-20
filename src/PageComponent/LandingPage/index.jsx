import React from 'react';

import HeaderBlock from '../../TemplateComponent/HeaderBlock/HeaderBlock';
import BannerBlock from '../../TemplateComponent/BannerBlock/BannerBlock';

import './style.scss';

function LandingPage() {
  return (
    <section className="landing-page">
      <HeaderBlock />
      <BannerBlock />
    </section>
  );
}

export default LandingPage;

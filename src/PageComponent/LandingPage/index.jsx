import React from 'react';

import HeaderBlock from '../../TemplateComponent/HeaderBlock/HeaderBlock';
import BannerBlock from '../../TemplateComponent/BannerBlock/BannerBlock';
import ContentBlock from '../../TemplateComponent/ContentBlock/ContentBlock';

import './style.scss';

function LandingPage() {
  return (
    <section className="landing-page">
      {/* <HeaderBlock /> */}
      <BannerBlock />
      <ContentBlock />
    </section>
  );
}

export default LandingPage;

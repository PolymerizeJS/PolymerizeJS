import React from 'react';

import BannerBlock from '../../TemplateComponent/BannerBlock/BannerBlock';
import ContentBlock from '../../TemplateComponent/ContentBlock/ContentBlock';

import './style.scss';

function LandingPage() {
  const contentBlockData = [
    {
      primaryTextContent: 'Alinea',
      secondaryTextContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      buttonName: 'Get it on Github',
    },
    {
      primaryTextContent: 'Apollo',
      secondaryTextContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      buttonName: 'Get it on Github',
    },
  ];
  const ContentBlockMap = contentBlockData.map((el, idx) => {
    return <ContentBlock key={idx.toString()}>{el}</ContentBlock>;
  });
  return (
    <section className="landing-page">
      {/* <HeaderBlock /> */}
      <BannerBlock />
      {ContentBlockMap}
    </section>
  );
}

export default LandingPage;

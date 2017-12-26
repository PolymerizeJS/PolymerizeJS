import React from 'react';

import BannerBlock from '../../TemplateComponent/BannerBlock/BannerBlock';
import ContentBlock from '../../TemplateComponent/ContentBlock/ContentBlock';
import ContactFormBlock from '../../TemplateComponent/ContactFormBlock/ContactFormBlock';

import './style.scss';

function LandingPage() {
  const contentBlockData = [
    {
      primaryTextContent: 'Alinea',
      secondaryTextContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      buttonName: '',
      anchorName: 'Get it on Github',
    },
    {
      primaryTextContent: 'Apollo',
      secondaryTextContent: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      buttonName: '',
      anchorName: 'Get it on Github',
    },
  ];
  const ContentBlockMap = contentBlockData.map((el, idx) => {
    return <ContentBlock key={idx.toString()}>{el}</ContentBlock>;
  });
  return (
    <section className="landing-page">
      <BannerBlock />
      {ContentBlockMap}
      <ContactFormBlock />
    </section>
  );
}

export default LandingPage;

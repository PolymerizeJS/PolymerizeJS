import React from 'react';

import HeaderBlock from '../../TemplateComponent/HeaderBlock/HeaderBlock';
import BannerBlock from '../../TemplateComponent/BannerBlock/BannerBlock';
import ContentBlock from '../../TemplateComponent/ContentBlock/ContentBlock';
import ContactFormBlock from '../../TemplateComponent/ContactFormBlock/ContactFormBlock';
import AllAtomicComponent from '../../AllAtomicComponent';

import './style.scss';

function LandingPage() {
  const headerBlockData = {
    appName: 'Polymerize',
    navItem: [
      {
        link: '#',
        linkName: 'documentation',
        button: false,
        router: false,
      },
      {
        link: '#',
        linkName: 'support',
        button: false,
        router: false,
      },
    ],
  };
  const bannerBlockData = [
    {
      primaryTextContent: 'Styled and configurable templates with reusable components to enable software engineers to create elegant product',
      secondaryTextContent: 'Polymerize is created after seeing many talented software engineers struggling to come up with initial UI layout.',
      linkName: 'Github',
      buttonName: '',
    },
  ];
  const contentBlockData = [
    {
      primaryTextContent: 'Alinea',
      secondaryTextContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      linkName: 'Get it on Github',
      buttonName: '',
    },
    {
      primaryTextContent: 'Apollo',
      secondaryTextContent: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      linkName: 'Get it on Github',
      buttonName: '',
    },
  ];
  const BannerBlockMap = bannerBlockData.map((el, idx) => {
    return <BannerBlock key={idx.toString()}>{el}</BannerBlock>;
  });
  const ContentBlockMap = contentBlockData.map((el, idx) => {
    return <ContentBlock key={idx.toString()}>{el}</ContentBlock>;
  });
  return (
    <section className="landing-page">
      <HeaderBlock>
        {headerBlockData}
      </HeaderBlock>
      {BannerBlockMap}
      {ContentBlockMap}
      <ContactFormBlock />
      <AllAtomicComponent />
    </section>
  );
}

export default LandingPage;

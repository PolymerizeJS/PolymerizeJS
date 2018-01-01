import React from 'react';

import HeaderBlock from '../../BlockComponent/HeaderBlock/HeaderBlock';
import BannerBlock from '../../BlockComponent/BannerBlock/BannerBlock';
import TextContentBlock from '../../BlockComponent/TextContentBlock/TextContentBlock';
import ImageContentBlock from '../../BlockComponent/ImageContentBlock/ImageContentBlock';
import ContactFormBlock from '../../BlockComponent/ContactFormBlock/ContactFormBlock';
import AllAtomicComponent from '../../AllAtomicComponent';

// data
import HeaderBlockConfig from '../../config/HeaderBlockConfig';
import BannerBlockConfig from '../../config/BannerBlockConfig';
import TextContentBlockConfig from '../../config/TextContentBlockConfig';

import placeHolderImage from '../../assets/placeholder.jpeg';

import './style.scss';

function LandingPage() {
  const headerBlockData = new HeaderBlockConfig();
  headerBlockData.defineAppName('Polymerize');
  headerBlockData.addNavLink('documentation', '#', false, false);
  headerBlockData.addNavLink('support', '#', false, false);
  headerBlockData.addNavButton('Test Button', () => {
    console.log('clicked!');
  });
  const bannerBlockData = new BannerBlockConfig();
  bannerBlockData.definePrimaryText(
    'Styled and configurable templates with reusable components to enable software engineers to create elegant product',
  );
  bannerBlockData.defineSecondaryText(
    'Polymerize is created after seeing many talented software engineers struggling to come up with initial UI layout.',
  );
  bannerBlockData.addActionLink('Github', '#', false, true);
  const textContentBlockData = new TextContentBlockConfig();
  textContentBlockData.definePrimaryText('Alinea');
  textContentBlockData.defineSecondaryText(
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  );
  textContentBlockData.addActionLink('Get it on Github', '#', false, true);
  const imageContentBlockData = [
    {
      name: 'ice and water with blue overlay',
      source: `dist/${placeHolderImage}`,
    },
  ];
  const ImageContentBlockMap = imageContentBlockData.map((el, idx) => {
    return <ImageContentBlock key={idx.toString()}>{el}</ImageContentBlock>;
  });
  return (
    <section className="landing-page">
      <HeaderBlock>
        {headerBlockData}
      </HeaderBlock>
      <BannerBlock>
        {bannerBlockData}
      </BannerBlock>
      <TextContentBlock>
        {textContentBlockData}
      </TextContentBlock>
      {ImageContentBlockMap}
      <ContactFormBlock />
      <AllAtomicComponent />
    </section>
  );
}

export default LandingPage;

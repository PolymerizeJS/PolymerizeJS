import React from 'react';

import HeaderBlock from '../../BlockComponent/HeaderBlock/HeaderBlock';
import BannerBlock from '../../BlockComponent/BannerBlock/BannerBlock';
import TextContentBlock from '../../BlockComponent/TextContentBlock/TextContentBlock';
import ImageContentBlock from '../../BlockComponent/ImageContentBlock/ImageContentBlock';
import ContactFormBlock from '../../BlockComponent/ContactFormBlock/ContactFormBlock';
import AllAtomicComponent from '../../AllAtomicComponent';

import placeHolderImage from '../../assets/placeholder.jpeg';

import './style.scss';

function LandingPage() {
  const headerBlockData = {
    appName: 'Polymerize',
    navItem: [
      {
        name: 'documentation',
        link: {
          to: '#',
          router: false,
          buttonStyle: false,
        },
        button: false,
      },
      {
        name: 'support',
        link: {
          to: '#',
          router: false,
          buttonStyle: false,
        },
        button: false,
      },
      {
        name: 'Sign up',
        link: {
          to: '/hello',
          router: true,
          buttonStyle: true,
        },
        button: false,
      },
      {
        name: 'Test Button',
        link: false,
        button: {
          onClick: () => { console.log('hello'); },
        },
      },
    ],
  };
  const bannerBlockData = [
    {
      primaryTextContent: 'Styled and configurable templates with reusable components to enable software engineers to create elegant product',
      secondaryTextContent: 'Polymerize is created after seeing many talented software engineers struggling to come up with initial UI layout.',
      actionItem: [
        {
          name: 'Github',
          link: {
            to: '#',
            router: false,
            buttonStyle: true,
          },
          button: false,
        },
        {
          name: 'documentation',
          link: false,
          button: {
            onClick: () => { console.log('clicked!'); },
          },
        },
      ],
    },
  ];
  const textContentBlockData = [
    {
      primaryTextContent: 'Alinea',
      secondaryTextContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      actionItem: [
        {
          name: 'Github',
          link: {
            to: '#',
            router: false,
            buttonStyle: true,
          },
          button: false,
        },
        {
          name: 'documentation',
          link: false,
          button: {
            onClick: () => { console.log('clicked!'); },
          },
        },
      ],
    },
    {
      primaryTextContent: 'Apollo',
      secondaryTextContent: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      actionItem: [
        {
          name: 'Github',
          link: {
            to: '#',
            router: false,
            buttonStyle: true,
          },
          button: false,
        },
        {
          name: 'documentation',
          link: false,
          button: {
            onClick: () => { console.log('clicked!'); },
          },
        },
      ],
    },
  ];
  const imageContentBlockData = [
    {
      name: 'ice and water with blue overlay',
      source: `dist/${placeHolderImage}`,
    },
  ];
  const BannerBlockMap = bannerBlockData.map((el, idx) => {
    return <BannerBlock key={idx.toString()}>{el}</BannerBlock>;
  });
  const TextContentBlockMap = textContentBlockData.map((el, idx) => {
    return <TextContentBlock key={idx.toString()}>{el}</TextContentBlock>;
  });
  const ImageContentBlockMap = imageContentBlockData.map((el, idx) => {
    return <ImageContentBlock key={idx.toString()}>{el}</ImageContentBlock>;
  });
  return (
    <section className="landing-page">
      <HeaderBlock>
        {headerBlockData}
      </HeaderBlock>
      {BannerBlockMap}
      {TextContentBlockMap}
      {ImageContentBlockMap}
      <ContactFormBlock />
      <AllAtomicComponent />
    </section>
  );
}

export default LandingPage;

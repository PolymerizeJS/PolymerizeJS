import React from 'react';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';

import './style.scss';

import AlineaImg from '../../assets/apollo/Alinea.jpg';

function BannerBlockView() {
  return (
    <section className="banner-block">
      <div className="bb-left">
        <MediumText>
          Styled and configurable templates with reusable components to enable software engineers to create elegant product
        </MediumText>
        <SmallText>
          Polymerize is created after seeing many talented software engineers struggling to make sense of their UI design.
          We are constantly thinking ways to make it better. There will be new feature every month.
        </SmallText>
      </div>
      <div className="bb-right">
        <img src={`dist/${AlineaImg}`} alt="apollo template" />
      </div>
    </section>
  );
}

export default BannerBlockView;

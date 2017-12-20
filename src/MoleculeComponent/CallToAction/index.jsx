import React from 'react';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumAnchor from '../../AtomComponent/MediumAnchor';

import './style.scss';

function CallToAction() {
  return (
    <section className="call-to-action">
      <MediumText>
        Styled and configurable templates with reusable components to enable software engineers to create elegant product
      </MediumText>
      <SmallText>
        Polymerize is created after seeing many talented software engineers struggling to come up with initial UI layout.
        <br />
        We are constantly finding ways to make it better. There will be new features every month.
      </SmallText>
      <MediumAnchor>
        Github
      </MediumAnchor>
    </section>
  );
}

export default CallToAction;

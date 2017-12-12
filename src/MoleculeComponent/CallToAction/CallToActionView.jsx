import React from 'react';

import MediumText from '../../AtomComponents/MediumText';
import SmallText from '../../AtomComponents/SmallText';
import MediumButton from '../../AtomComponents/MediumButton';

function CallToActionView() {
  return (
    <section className="call-to-action">
      <MediumText>
        Styled and configurable templates with reusable components to enable software engineers to create elegant product fast.
      </MediumText>
      <SmallText>
        Polymerize is created after seeing many talented software engineers struggling to make sense of the basic UI design.
      </SmallText>
      <MediumButton>
        GitHub
      </MediumButton>
    </section>
  );
}

export default CallToActionView;

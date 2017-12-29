import React from 'react';

// text components
import ExtraSmallText from '../AtomComponent/ExtraSmallText';
import SmallText from '../AtomComponent/SmallText';
import MediumText from '../AtomComponent/MediumText';
import LargeText from '../AtomComponent/LargeText';
import SecondaryText from '../AtomComponent/SecondaryText';
import PrimaryText from '../AtomComponent/PrimaryText';

// button components
import SmallButton from '../AtomComponent/SmallButton';
import MediumButton from '../AtomComponent/MediumButton';
import LargeButton from '../AtomComponent/LargeButton';
import FullWidthButton from '../AtomComponent/FullWidthButton';

// form component
import HalfWidthInput from '../AtomComponent/HalfWidthInput';
import HalfWidthTextarea from '../AtomComponent/HalfWidthTextarea';
import FullWidthInput from '../AtomComponent/FullWidthInput';
import FullWidthTextarea from '../AtomComponent/FullWidthTextarea';

import './style.scss';

function AllAtomicComponent() {
  return (
    <section className="all-atomic-component">
      <ExtraSmallText>
        ExtraSmallText: I think you look quite nice today!
      </ExtraSmallText>
      <SmallText>
        SmallText: I think you look quite nice today!
      </SmallText>
      <MediumText>
        MediumText: I think you look quite nice today!
      </MediumText>
      <LargeText>
        LargeText: I think you look quite nice today!
      </LargeText>
      <SecondaryText>
        SecondaryText: I think you look quite nice today!
      </SecondaryText>
      <PrimaryText>
        PrimaryText: I think you look quite nice today!
      </PrimaryText>
      <SmallButton>
        I am a small button
      </SmallButton>
      <MediumButton>
        I am a medium button
      </MediumButton>
      <LargeButton>
        I am a large button
      </LargeButton>
      <FullWidthButton>
        I am a full width button
      </FullWidthButton>
      <HalfWidthInput value="I am a half width input field" />
      <HalfWidthTextarea value="I am a half width textarea" />
      <FullWidthInput value="I am a full width input field" />
      <FullWidthTextarea value="I am a full width textarea" />
    </section>
  );
}

export default AllAtomicComponent;

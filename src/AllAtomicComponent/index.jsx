import React from 'react';

// text components
import ExtraSmallText from '../AtomComponent/ExtraSmallText';
import SmallText from '../AtomComponent/SmallText';
import MediumText from '../AtomComponent/MediumText';
import LargeText from '../AtomComponent/LargeText';
import SecondaryText from '../AtomComponent/SecondaryText';
import PrimaryText from '../AtomComponent/PrimaryText';

// link components
import ExtraSmallLink from '../AtomComponent/ExtraSmallLink';
import SmallLink from '../AtomComponent/SmallLink';
import MediumLink from '../AtomComponent/MediumLink';
import LargeLink from '../AtomComponent/LargeLink';

// button components
import ExtraSmallButton from '../AtomComponent/ExtraSmallButton';
import SmallButton from '../AtomComponent/SmallButton';
import MediumButton from '../AtomComponent/MediumButton';
import LargeButton from '../AtomComponent/LargeButton';
import FullWidthButton from '../AtomComponent/FullWidthButton';

// form components
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
      <ExtraSmallLink onClick={e => e.target.value}>
        ExtraSmallLink: I think you look quite nice today!
      </ExtraSmallLink>
      <SmallLink onClick={e => e.target.value}>
        SmallLink: I think you look quite nice today!
      </SmallLink>
      <MediumLink onClick={e => e.target.value}>
        MediumLink: I think you look quite nice today!
      </MediumLink>
      <LargeLink onClick={e => e.target.value}>
        LargeLink: I think you look quite nice today!
      </LargeLink>
      <ExtraSmallLink onClick={e => e.target.value} button>
        ExtraSmallLink: I think you look quite nice today!
      </ExtraSmallLink>
      <SmallLink onClick={e => e.target.value} button>
        SmallLinkButton: I think you look quite nice today!
      </SmallLink>
      <MediumLink onClick={e => e.target.value} button>
        MediumLinkButton: I think you look quite nice today!
      </MediumLink>
      <LargeLink onClick={e => e.target.value} button>
        LargeLinkButton: I think you look quite nice today!
      </LargeLink>
      <ExtraSmallButton>
        I am a extra small button
      </ExtraSmallButton>
      <SmallButton onClick={e => e.target.value}>
        I am a small button
      </SmallButton>
      <MediumButton onClick={e => e.target.value}>
        I am a medium button
      </MediumButton>
      <LargeButton onClick={e => e.target.value}>
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

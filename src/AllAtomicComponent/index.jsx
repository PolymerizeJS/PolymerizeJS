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
import FullWdithLink from '../AtomComponent/FullWidthLink';

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
  const clicked = () => console.log(clicked);
  const change = e => console.log(e.target.value);
  return (
    <section className="all-atomic-component">
      <section className="aac-text">
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
      </section>
      <section className="acc-link">
        <ExtraSmallLink onClick={clicked}>
          ExtraSmallLink: I think you look quite nice today!
        </ExtraSmallLink>
        <SmallLink onClick={clicked}>
          SmallLink: I think you look quite nice today!
        </SmallLink>
        <MediumLink onClick={clicked}>
          MediumLink: I think you look quite nice today!
        </MediumLink>
        <LargeLink onClick={clicked}>
          LargeLink: I think you look quite nice today!
        </LargeLink>
      </section>
      <section className="acc-link-button">
        <section className="acc-link-button-1">
          <ExtraSmallLink onClick={clicked} button>
            ExtraSmallLinkButton
          </ExtraSmallLink>
        </section>
        <section className="acc-link-button-2">
          <SmallLink onClick={clicked} button>
            SmallLinkButtonButton
          </SmallLink>
        </section>
        <section className="acc-link-button-3">
          <MediumLink onClick={clicked} button>
            MediumLinkButtonButton
          </MediumLink>
        </section>
        <section className="acc-link-button-4">
          <LargeLink onClick={clicked} button>
            LargeLinkButtonButton
          </LargeLink>
        </section>
        <section className="acc-link-button-5">
          <FullWdithLink onClick={clicked} button>
            FullWidthLinkButtonButton
          </FullWdithLink>
        </section>
      </section>
      <section className="acc-button">
        <ExtraSmallButton onClick={clicked}>
          I am a extra small button
        </ExtraSmallButton>
        <SmallButton onClick={clicked}>
          I am a small button
        </SmallButton>
        <MediumButton onClick={clicked}>
          I am a medium button
        </MediumButton>
        <LargeButton onClick={clicked}>
          I am a large button
        </LargeButton>
        <FullWidthButton onClick={clicked}>
          I am a full width button
        </FullWidthButton>
      </section>
      <section className="acc-input">
        <HalfWidthInput value="I am a half width input field" onChange={change} />
        <HalfWidthTextarea value="I am a half width textarea" onChange={change} />
        <FullWidthInput value="I am a full width input field" onChange={change} />
        <FullWidthTextarea value="I am a full width textarea" onChange={change} />
      </section>
    </section>
  );
}

export default AllAtomicComponent;

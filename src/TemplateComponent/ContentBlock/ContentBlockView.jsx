import React from 'react';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import FullWidthImage from '../../AtomComponent/FullWidthImg';
import MediumAnchor from '../../AtomComponent/MediumAnchor';
import PlaceHolder2 from '../../assets/placeholder2.jpeg';

import './style.scss';

function BlockContentView() {
  return (
    <section className="content-block">
      <div className="cb-left-container">
        <div className="cb-left">
          <MediumText>
            Alinea Template:
          </MediumText>
          <SmallText>
            Classic web layout designed for small and mid-sized company to optimize the conversion rate.
          </SmallText>
          <MediumAnchor>
            Get it on Github
          </MediumAnchor>
        </div>
      </div>
      <div className="cb-right-container">
        <div className="cb-right">
          <FullWidthImage src={`dist/${PlaceHolder2}`} alt="placeholder" />
        </div>
      </div>
    </section>
  );
}

export default BlockContentView;

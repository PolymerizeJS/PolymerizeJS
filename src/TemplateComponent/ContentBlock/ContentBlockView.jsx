import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import FullWidthImage from '../../AtomComponent/FullWidthImg';
import MediumAnchor from '../../AtomComponent/MediumAnchor';
import PlaceHolder2 from '../../assets/placeholder2.jpeg';

import './style.scss';

function BlockContentView({ primaryTextContent, secondaryTextContent, buttonName }) {
  return (
    <section className="content-block">
      <MediumText>
        {primaryTextContent}
      </MediumText>
      <SmallText>
        {secondaryTextContent}
      </SmallText>
      <MediumAnchor>
        {buttonName}
      </MediumAnchor>
      {/* <div className="cb-right-container">
        <div className="cb-right">
          <FullWidthImage src={`dist/${PlaceHolder2}`} alt="placeholder" />
        </div>
      </div> */}
    </section>
  );
}

BlockContentView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  buttonName: '',
};

BlockContentView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BlockContentView;

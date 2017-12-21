import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import FullWidthImage from '../../AtomComponent/FullWidthImg';
import MediumAnchor from '../../AtomComponent/MediumAnchor';
import PlaceHolder2 from '../../assets/placeholder2.jpeg';

import ContentBlockAction from './ContentBlockAction';

import './style.scss';

function BlockContentView({ dispatch, title, textContent, buttonName }) {
  dispatch(ContentBlockAction(
    'Alinea',
    'Classic web layout designed for small and mid-sized company to optimize the conversion rate.',
    'Get it on Github',
  ));
  return (
    <section className="content-block">
      <div className="cb-left-container">
        <div className="cb-left">
          <MediumText>
            {title}
          </MediumText>
          <SmallText>
            {textContent}
          </SmallText>
          <MediumAnchor>
            {buttonName}
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

BlockContentView.defaultProps = {
  title: '',
  textContent: '',
  buttonName: '',
};

BlockContentView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string,
  textContent: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BlockContentView;

import React from 'react';
import PropTypes from 'prop-types';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumAnchor from '../../AtomComponent/MediumAnchor';

import TitleTextButton from '../../MoleculeComponent/TitleTextButton';

import './style.scss';

function BlockContentView({ primaryTextContent, secondaryTextContent, buttonName }) {
  return (
    <section className="content-block">
      <TitleTextButton>
        {{
          primaryTextContent,
          secondaryTextContent,
          buttonName,
        }}
      </TitleTextButton>
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

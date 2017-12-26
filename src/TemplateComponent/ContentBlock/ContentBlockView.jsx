import React from 'react';
import PropTypes from 'prop-types';

import TitleTextButton from '../../MoleculeComponent/TitleTextButton';

import './style.scss';

function BlockContentView({ primaryTextContent, secondaryTextContent, anchorName, buttonName }) {
  return (
    <section className="content-block">
      <TitleTextButton>
        {{
          primaryTextContent,
          secondaryTextContent,
          anchorName,
          buttonName,
        }}
      </TitleTextButton>
    </section>
  );
}

BlockContentView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  anchorName: '',
  buttonName: '',
};

BlockContentView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  anchorName: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BlockContentView;

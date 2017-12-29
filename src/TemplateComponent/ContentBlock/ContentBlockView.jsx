import React from 'react';
import PropTypes from 'prop-types';

import TitleTextButton from '../../MoleculeComponent/TitleTextButton';

import './style.scss';

function BlockContentView({ primaryTextContent, secondaryTextContent, linkName, buttonName }) {
  return (
    <section className="content-block">
      <TitleTextButton>
        {{
          primaryTextContent,
          secondaryTextContent,
          linkName,
          buttonName,
        }}
      </TitleTextButton>
    </section>
  );
}

BlockContentView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  linkName: '',
  buttonName: '',
};

BlockContentView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  linkName: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BlockContentView;

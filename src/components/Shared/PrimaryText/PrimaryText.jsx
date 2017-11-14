import React from 'react';
import PropTypes from 'prop-types';
import './PrimaryTextStyle.scss';

function PrimaryText({ primaryTextContent }) {
  return (
    <section className="primary-text">
      <h2>
        { primaryTextContent }
      </h2>
    </section>
  );
}

PrimaryText.propTypes = {
  primaryTextContent: PropTypes.string.isRequired,
};

export default PrimaryText;

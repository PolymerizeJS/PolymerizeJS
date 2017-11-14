import React from 'react';
import PropTypes from 'prop-types';
import './SecondaryTextStyle.scss';

function SecondaryText({ secondaryTextContent }) {
  return (
    <section className="secondary-text">
      <h3>
        { secondaryTextContent }
      </h3>
    </section>
  );
}

SecondaryText.propTypes = {
  secondaryTextContent: PropTypes.string.isRequired,
};

export default SecondaryText;

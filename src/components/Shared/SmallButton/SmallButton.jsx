import React from 'react';
import PropTypes from 'prop-types';
import './SmallButtonStyle.scss';

function SmallButton({ smallButtonContent }) {
  return (
    <button
      className="small-button"
    >
      { smallButtonContent }
    </button>
  );
}

SmallButton.propTypes = {
  smallButtonContent: PropTypes.string.isRequired,
};

export default SmallButton;

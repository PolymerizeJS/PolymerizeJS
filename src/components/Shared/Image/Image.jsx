import React from 'react';
import PropTypes from 'prop-types';

// Style import
import './ImageStyle.scss';

function Image({ imagePath, children }) {
  return (
    <section className="img-container">
      <img src={`./dist/${imagePath}`} alt="web template" />
      { children }
    </section>
  );
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
export default Image;

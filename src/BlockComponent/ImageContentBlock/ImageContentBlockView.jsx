import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ImageContentBlockView({ name, source }) {
  return (
    <section className="image-content-block">
      <img src={source} alt={name} />
    </section>
  );
}

ImageContentBlockView.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ImageContentBlockView;

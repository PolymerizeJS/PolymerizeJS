import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ImageContentBlockView({ name, src }) {
  return (
    <section className="image-content-block">
      <img src={src} alt={name} />
    </section>
  );
}

ImageContentBlockView.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageContentBlockView;

import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Shared/Image/Image';
import SmallButton from '../../Shared/SmallButton/SmallButton';

// style import
import './BannerRightStyle.scss';

function BannerRight({ image }) {
  return (
    <section
      className="banner-right"
    >
      <Image imagePath={image[0]}>
        <SmallButton
          smallButtonContent="Get Alinea"
        />
      </Image>
      <Image imagePath={image[1]}>
        <SmallButton
          smallButtonContent="Get Apollo"
        />
      </Image>
    </section>
  );
}

BannerRight.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BannerRight;

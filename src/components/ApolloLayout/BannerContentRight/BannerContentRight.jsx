import React from 'react';
import Image from '../../Shared/Image/Image';

// style import
import BannerContentRightStyle from './BannerContentRightStyle.scss';

function BannerContentRight() {
  return (
    <section
      className="banner-content-right"
      style={BannerContentRightStyle}
    >
      <Image />
    </section>
  );
}

export default BannerContentRight;

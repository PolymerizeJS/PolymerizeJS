import React from 'react';
import PropTypes from 'prop-types';

// component
import SmallText from '../../AtomComponent/SmallText';
import SmallLink from '../../AtomComponent/SmallLink';
import SmallButton from '../../AtomComponent/SmallButton';
import MediumText from '../../AtomComponent/MediumText';

// style
import './style.scss';

function BannerBlockView({ primaryTextContent, secondaryTextContent, linkName, buttonName }) {
  return (
    <section className="banner-block">
      <section className="call-to-action">
        <MediumText>
          {primaryTextContent}
        </MediumText>
        <SmallText>
          {secondaryTextContent}
        </SmallText>
        {
          buttonName !== '' &&
          <SmallButton>
            {buttonName}
          </SmallButton>
        }
        {
          linkName !== '' &&
          <SmallLink button>
            {linkName}
          </SmallLink>
        }
      </section>
    </section>
  );
}

BannerBlockView.defaultProps = {
  primaryTextContent: '',
  secondaryTextContent: '',
  linkName: '',
  buttonName: '',
};

BannerBlockView.propTypes = {
  primaryTextContent: PropTypes.string,
  secondaryTextContent: PropTypes.string,
  linkName: PropTypes.string,
  buttonName: PropTypes.string,
};

export default BannerBlockView;

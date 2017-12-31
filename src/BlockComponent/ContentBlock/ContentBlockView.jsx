import React from 'react';
import PropTypes from 'prop-types';

import SmallText from '../../AtomComponent/SmallText';
import SmallButton from '../../AtomComponent/SmallButton';
import SmallLink from '../../AtomComponent/SmallLink';
import SecondaryText from '../../AtomComponent/SecondaryText';

import './style.scss';

function BlockContentView({ primaryTextContent, secondaryTextContent, linkName, buttonName }) {
  return (
    <section className="content-block">
      <section className="title-text-button">
        <SecondaryText>
          {primaryTextContent}
        </SecondaryText>
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

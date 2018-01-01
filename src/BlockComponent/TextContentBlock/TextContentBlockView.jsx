import React from 'react';
import PropTypes from 'prop-types';

import SmallText from '../../AtomComponent/SmallText';
import SmallButton from '../../AtomComponent/SmallButton';
import SmallLink from '../../AtomComponent/SmallLink';
import SecondaryText from '../../AtomComponent/SecondaryText';

import './style.scss';

function TextBlockContentView({ primaryText, secondaryText, actionItem }) {
  const ActionItemMap = actionItem.map((el, idx) => {
    if (el.link instanceof Object) {
      return (
        <SmallLink
          key={idx.toString()}
          to={el.link.to}
          button={el.link.buttonStyle}
          router={el.link.router}
        >
          {el.name}
        </SmallLink>
      );
    }
    return (
      <SmallButton key={idx.toString()} onClick={el.button.onClick}>
        {el.name}
      </SmallButton>
    );
  });
  return (
    <section className="text-block">
      <section className="text-block-item">
        <section className="text-block-text">
          <SecondaryText>
            {primaryText}
          </SecondaryText>
          <SmallText>
            {secondaryText}
          </SmallText>
        </section>
        <section className="text-block-action">
          {ActionItemMap}
        </section>
      </section>
    </section>
  );
}

TextBlockContentView.defaultProps = {
  primaryText: '',
  secondaryText: '',
  actionItem: [],
};

TextBlockContentView.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  actionItem: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        router: PropTypes.bool.isRequired,
        buttonStyle: PropTypes.bool.isRequired,
      }),
    ]),
    button: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
      }),
    ]),
  })),
};

export default TextBlockContentView;

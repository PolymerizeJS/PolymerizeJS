import React from 'react';
import PropTypes from 'prop-types';

// component
import SmallText from '../../AtomComponent/SmallText';
import SmallLink from '../../AtomComponent/SmallLink';
import SmallButton from '../../AtomComponent/SmallButton';
import MediumText from '../../AtomComponent/MediumText';

// style
import './style.scss';

function BannerBlockView({ primaryText, secondaryText, actionItem }) {
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
    <section className="banner-block">
      <section className="call-to-action">
        <section className="action-text">
          <MediumText>
            {primaryText}
          </MediumText>
          <SmallText>
            {secondaryText}
          </SmallText>
        </section>
        <section className="action-item">
          {ActionItemMap}
        </section>
      </section>
    </section>
  );
}

BannerBlockView.defaultProps = {
  primaryText: '',
  secondaryText: '',
  actionItem: [],
};

BannerBlockView.propTypes = {
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

export default BannerBlockView;

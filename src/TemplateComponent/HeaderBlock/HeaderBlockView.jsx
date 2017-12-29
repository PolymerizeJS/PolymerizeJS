import React from 'react';
import PropTypes from 'prop-types';

import PrimaryText from '../../AtomComponent/PrimaryText';
import MainNav from '../../MoleculeComponent/MainNav';

import './style.scss';

function HeaderBlockView({ appName, navItem }) {
  return (
    <header className="header-block">
      <PrimaryText className="logo">
        {appName}
      </PrimaryText>
      <MainNav>
        {navItem}
      </MainNav>
    </header>
  );
}

HeaderBlockView.defaultProps = {
  appName: '',
  navItem: '',
  button: false,
  router: false,
};

HeaderBlockView.propTypes = {
  appName: PropTypes.string,
  navItem: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
    button: PropTypes.bool,
    router: PropTypes.bool,
  })),
};

export default HeaderBlockView;

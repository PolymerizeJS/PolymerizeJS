import React from 'react';
import PropTypes from 'prop-types';

import PrimaryText from '../../AtomComponent/PrimaryText';
import MainNav from '../../MoleculeComponent/MainNav';

import './style.scss';

function HeaderBlockView({ appName, navItem }) {
  return (
    <header className="header-block">
      <PrimaryText className="logo">
        { appName }
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
};

HeaderBlockView.propTypes = {
  appName: PropTypes.string,
  navItem: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired,
  })),
};

export default HeaderBlockView;

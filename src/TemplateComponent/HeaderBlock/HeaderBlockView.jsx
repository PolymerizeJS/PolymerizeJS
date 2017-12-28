import React from 'react';
import PropTypes from 'prop-types';

import PrimaryText from '../../AtomComponent/PrimaryText';
import MainNav from '../../MoleculeComponent/MainNav';

import './style.scss';

function HeaderBlockView({ logo, nav }) {
  return (
    <header className="header-block">
      <PrimaryText className="logo">
        Polymerize
      </PrimaryText>
      <MainNav>
        {[
          {
            route: '#',
            routeName: 'About',
          },
          {
            route: '#',
            routeName: 'contact',
          },
        ]}
      </MainNav>
    </header>
  );
}

export default HeaderBlockView;

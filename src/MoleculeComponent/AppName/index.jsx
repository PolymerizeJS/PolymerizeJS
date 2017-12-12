import React from 'react';
import PropTypes from 'prop-types';

// atomic component
import PrimaryText from '../../AtomComponents/PrimaryText';

// style
import './style.scss';

function AppName({ children }) {
  return (
    <section className="app-name">
      <PrimaryText>
        {children}
      </PrimaryText>
    </section>
  );
}

AppName.defaultProps = {
  children: '',
};

AppName.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppName;

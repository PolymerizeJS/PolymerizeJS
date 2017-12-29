import { connect } from 'react-redux';

import HeaderBlockView from './HeaderBlockView';

// action
import HeaderBlockAction from './HeaderBlockAction';

const mapStateToProps = state => state.headerBlockReducer;

const mapDispatchToProps = (dispatch, ownProps) => {
  const headerBlockData = ownProps.children;
  return dispatch(HeaderBlockAction(
    headerBlockData.appName,
    headerBlockData.navItem,
  ));
};

const HeaderBlock = connect(mapStateToProps, mapDispatchToProps)(HeaderBlockView);

export default HeaderBlock;

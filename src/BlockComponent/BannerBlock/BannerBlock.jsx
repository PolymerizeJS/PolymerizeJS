import { connect } from 'react-redux';

import BannerBlockView from './BannerBlockView';

import BannerBlockAction from './BannerBlockAction';

const mapStateToProps = state => state.bannerBlockReducer;

const mapDispatchToProps = (dispatch, ownProps) => {
  const bannerData = ownProps.children;
  return dispatch(BannerBlockAction(
    bannerData.primaryTextContent,
    bannerData.secondaryTextContent,
    bannerData.actionItem,
  ));
};

const BannerBlock = connect(mapStateToProps, mapDispatchToProps)(BannerBlockView);

export default BannerBlock;

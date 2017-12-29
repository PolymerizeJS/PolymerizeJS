import { connect } from 'react-redux';

import BannerBlockView from './BannerBlockView';

import BannerBlockAction from './BannerBlockAction';

const mapStateToProps = state => state.bannerBlockReducer;

const mapDispatchToProps = (dispatch, ownProps) => {
  const initialData = ownProps.children;
  return dispatch(BannerBlockAction(
    initialData.primaryTextContent,
    initialData.secondaryTextContent,
    initialData.linkName,
    initialData.buttonName,
  ));
};

const BannerBlock = connect(mapStateToProps, mapDispatchToProps)(BannerBlockView);

export default BannerBlock;

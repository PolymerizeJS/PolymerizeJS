import { connect } from 'react-redux';

import BannerBlockView from './BannerBlockView';

const mapStateToProps = state => state.bannerBlockReducer;

const BannerBlock = connect(mapStateToProps)(BannerBlockView);

export default BannerBlock;

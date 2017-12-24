import { connect } from 'react-redux';

import BannerBlockView from './BannerBlockView';

// action
import BannerBlockAction from './BannerBlockAction';

const initialData = {
  primaryTextContent: 'Styled and configurable templates with reusable components to enable software engineers to create elegant product',
  secondaryTextContent: 'Polymerize is created after seeing many talented software engineers struggling to come up with initial UI layout.',
  buttonName: 'Github',
};

const mapStateToProps = state => state.bannerBlockReducer;

const mapDispatchToProps = dispatch => dispatch(BannerBlockAction(
  initialData.primaryTextContent,
  initialData.secondaryTextContent,
  initialData.buttonName,
));

const BannerBlock = connect(mapStateToProps, mapDispatchToProps)(BannerBlockView);

export default BannerBlock;

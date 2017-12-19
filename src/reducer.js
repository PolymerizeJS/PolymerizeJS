import { combineReducers } from 'redux';

// reducers
import headerBlockReducer from './ContainerComponent/HeaderBlock/headerBlockReducer';
import bannerBlockReducer from './ContainerComponent/BannerBlock/bannerBlockReducer';
import contentBlockReducer from './ContainerComponent/ContentBlock/contentBlockReducer';

const PolymerizeApp = combineReducers({
  headerBlockReducer,
  bannerBlockReducer,
  contentBlockReducer,
});

export default PolymerizeApp;

import { combineReducers } from 'redux';

// reducers
import headerBlockReducer from './TemplateComponent/HeaderBlock/headerBlockReducer';
import bannerBlockReducer from './TemplateComponent/BannerBlock/bannerBlockReducer';
import contentBlockReducer from './TemplateComponent/ContentBlock/contentBlockReducer';

const PolymerizeApp = combineReducers({
  headerBlockReducer,
  bannerBlockReducer,
  contentBlockReducer,
});

export default PolymerizeApp;

import { combineReducers } from 'redux';

// reducers
import headerBlockReducer from './BlockComponent/HeaderBlock/headerBlockReducer';
import bannerBlockReducer from './BlockComponent/BannerBlock/bannerBlockReducer';
import contentBlockReducer from './BlockComponent/ContentBlock/contentBlockReducer';
import contactFormBlockReducer from './BlockComponent/ContactFormBlock/contactFormBlockReducer';

const PolymerizeApp = combineReducers({
  headerBlockReducer,
  bannerBlockReducer,
  contentBlockReducer,
  contactFormBlockReducer,
});

export default PolymerizeApp;

import { combineReducers } from 'redux';

// reducers
import headerBlockReducer from './TemplateComponent/HeaderBlock/headerBlockReducer';
import bannerBlockReducer from './TemplateComponent/BannerBlock/bannerBlockReducer';
import contentBlockReducer from './TemplateComponent/ContentBlock/contentBlockReducer';
import contactFormBlockReducer from './TemplateComponent/ContactFormBlock/contactFormBlockReducer';

const PolymerizeApp = combineReducers({
  headerBlockReducer,
  bannerBlockReducer,
  contentBlockReducer,
  contactFormBlockReducer,
});

export default PolymerizeApp;

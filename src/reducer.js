import { combineReducers } from 'redux';

// reducers
import bannerBlockReducer from './TemplateComponent/BannerBlock/bannerBlockReducer';
import contentBlockReducer from './TemplateComponent/ContentBlock/contentBlockReducer';
import contactFormBlockReducer from './TemplateComponent/ContactFormBlock/contactFormBlockReducer';

const PolymerizeApp = combineReducers({
  bannerBlockReducer,
  contentBlockReducer,
  contactFormBlockReducer,
});

export default PolymerizeApp;

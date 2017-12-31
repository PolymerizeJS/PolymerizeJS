import { combineReducers } from 'redux';

// reducers
import headerBlockReducer from './BlockComponent/HeaderBlock/headerBlockReducer';
import bannerBlockReducer from './BlockComponent/BannerBlock/bannerBlockReducer';
import textContentBlockReducer from './BlockComponent/TextContentBlock/textContentBlockReducer';
import imageContentBlockReducer from './BlockComponent/ImageContentBlock/imageContentBlockReducer';
import contactFormBlockReducer from './BlockComponent/ContactFormBlock/contactFormBlockReducer';

const PolymerizeApp = combineReducers({
  headerBlockReducer,
  bannerBlockReducer,
  textContentBlockReducer,
  imageContentBlockReducer,
  contactFormBlockReducer,
});

export default PolymerizeApp;

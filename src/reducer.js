import { combineReducers } from 'redux';

// reducers
import blockContentReducer from './TemplateComponent/BlockContent/blockContentReducer';
import callToActionReducer from './TemplateComponent/CallToAction/callToActionReducer';
import companyNameReducer from './TemplateComponent/CompanyName/companyNameReducer';
import mainNavReducer from './TemplateComponent/MainNav/mainNavReducer';

const PolymerizeApp = combineReducers({
  blockContentReducer,
  callToActionReducer,
  companyNameReducer,
  mainNavReducer,
});

export default PolymerizeApp;

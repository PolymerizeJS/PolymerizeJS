import { connect } from 'react-redux';

import ContentBlockView from './ContentBlockView';

// action
import ContentBlockAction from './ContentBlockAction';

const initialData = {
  primaryTextContent: 'Alinea',
  secondaryTextContent: 'Good looking template',
  buttonName: 'Get it now',
};

const mapStateToProps = state => state.contentBlockReducer;

const mapDispatchToProps = dispatch => dispatch(ContentBlockAction(
  initialData.primaryTextContent,
  initialData.secondaryTextContent,
  initialData.buttonName,
));

const ContentBlock = connect(mapStateToProps, mapDispatchToProps)(ContentBlockView);

export default ContentBlock;

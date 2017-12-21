import { connect } from 'react-redux';

import ContentBlockView from './ContentBlockView';

const mapStateToProps = (state) => {
  return state.contentBlockReducer;
};

const ContentBlock = connect(mapStateToProps)(ContentBlockView);

export default ContentBlock;

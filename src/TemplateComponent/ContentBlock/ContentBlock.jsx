import { connect } from 'react-redux';

import ContentBlockView from './ContentBlockView';

// action
import ContentBlockAction from './ContentBlockAction';

const mapStateToProps = state => state.contentBlockReducer;

const mapDispatchToProps = (dispatch, ownProps) => {
  const contentBlockData = ownProps.children;
  return dispatch(ContentBlockAction(
    contentBlockData.primaryTextContent,
    contentBlockData.secondaryTextContent,
    contentBlockData.buttonName,
  ));
};

const ContentBlock = connect(mapStateToProps, mapDispatchToProps)(ContentBlockView);

export default ContentBlock;

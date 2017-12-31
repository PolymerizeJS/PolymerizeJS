import { connect } from 'react-redux';

import TextContentBlockView from './TextContentBlockView';

// action
import TextContentBlockAction from './TextContentBlockAction';

const mapStateToProps = state => state.textContentBlockReducer;

const mapDispatchToProps = (dispatch, ownProps) => {
  const textContentBlockData = ownProps.children;
  return dispatch(TextContentBlockAction(
    textContentBlockData.primaryTextContent,
    textContentBlockData.secondaryTextContent,
    textContentBlockData.actionItem,
  ));
};

const TextContentBlock = connect(mapStateToProps, mapDispatchToProps)(TextContentBlockView);

export default TextContentBlock;

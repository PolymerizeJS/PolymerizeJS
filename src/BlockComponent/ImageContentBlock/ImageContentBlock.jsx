import { connect } from 'react-redux';

import ImageContentBlockAction from './ImageContentBlockAction';

import ImageContentBlockView from './ImageContentBlockView';

const mapStateToProps = state => state.imageContentBlockReducer;

const mapDispatchToProps = (dispatch, ownProps) => {
  const imageContentData = ownProps.children;
  return dispatch(ImageContentBlockAction(
    imageContentData.name,
    imageContentData.source,
  ));
};

const ImageContentBlock = connect(mapStateToProps, mapDispatchToProps)(ImageContentBlockView);

export default ImageContentBlock;

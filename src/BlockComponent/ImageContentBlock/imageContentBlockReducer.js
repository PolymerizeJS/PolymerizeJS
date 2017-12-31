const initialState = {
  name: '',
  src: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_IMAGE_CONTENT':
      return {
        name: action.name,
        src: action.src,
      }
    default:
      return state;
  }
};

export default handleAction;

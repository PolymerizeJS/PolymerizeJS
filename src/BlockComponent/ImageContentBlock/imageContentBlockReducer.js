const initialState = {
  name: '',
  source: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_IMAGE_CONTENT':
      return {
        name: action.name,
        source: action.source,
      };
    default:
      return state;
  }
};

export default handleAction;

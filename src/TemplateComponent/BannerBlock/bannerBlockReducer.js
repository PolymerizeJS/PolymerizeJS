const initialState = {
  primaryTextContent: '',
  secondaryTextContent: '',
  anchorName: '',
  buttonName: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BANNER_CONTENT':
      return {
        primaryTextContent: action.primaryTextContent,
        secondaryTextContent: action.secondaryTextContent,
        anchorName: action.anchorName,
        buttonName: action.buttonName,
      };
    default:
      return state;
  }
};

export default handleAction;

const initialState = {
  primaryTextContent: '',
  secondaryTextContent: '',
  buttonName: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BLOCK_CONTENT':
      return {
        primaryTextContent: action.primaryTextContent,
        secondaryTextContent: action.secondaryTextContent,
        buttonName: action.buttonName,
      };
    default:
      return state;
  }
};

export default handleAction;

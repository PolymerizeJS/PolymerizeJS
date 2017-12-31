const initialState = {
  primaryTextContent: '',
  secondaryTextContent: '',
  linkName: '',
  buttonName: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BLOCK_CONTENT':
      return {
        primaryTextContent: action.primaryTextContent,
        secondaryTextContent: action.secondaryTextContent,
        linkName: action.linkName,
        buttonName: action.buttonName,
      };
    default:
      return state;
  }
};

export default handleAction;

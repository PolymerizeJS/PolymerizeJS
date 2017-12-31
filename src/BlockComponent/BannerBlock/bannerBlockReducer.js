const initialState = {
  primaryTextContent: '',
  secondaryTextContent: '',
  actionItem: [],
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BANNER_BLOCK_CONTENT':
      return {
        primaryTextContent: action.primaryTextContent,
        secondaryTextContent: action.secondaryTextContent,
        actionItem: action.actionItem,
      };
    default:
      return state;
  }
};

export default handleAction;

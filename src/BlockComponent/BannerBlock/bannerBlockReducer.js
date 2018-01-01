const initialState = {
  primaryText: '',
  secondaryText: '',
  actionItem: [],
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_BANNER_BLOCK_CONTENT':
      return {
        primaryText: action.primaryText,
        secondaryText: action.secondaryText,
        actionItem: action.actionItem,
      };
    default:
      return state;
  }
};

export default handleAction;

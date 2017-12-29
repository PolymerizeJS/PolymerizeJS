const initialState = {
  appName: '',
  navItem: [],
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_HEADER_CONTENT':
      return {
        appName: action.appName,
        navItem: action.navItem,
      };
    default:
      return state;
  }
};

export default handleAction;

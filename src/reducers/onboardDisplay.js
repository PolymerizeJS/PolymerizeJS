const onboardDisplay = (state = [], action) => {
  switch (action.type) {
    case 'BANNER_DISPLAY':
      return action;
    default:
      return state;
  }
};

export default onboardDisplay;

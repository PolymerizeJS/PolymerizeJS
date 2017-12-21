const initialState = {
  title: '',
  textContent: '',
  buttonName: '',
};

function handleAction(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONTENT':
      return {
        title: action.title,
        textContent: action.textContent,
        buttonName: action.buttonName,
      };
    default:
      return state;
  }
}

export default handleAction;

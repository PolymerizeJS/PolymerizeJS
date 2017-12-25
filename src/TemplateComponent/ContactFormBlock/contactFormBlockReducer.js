const initialState = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

const handleAction = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_NAME':
      return {
        name: action.name,
        subject: state.subject,
        email: state.email,
        message: state.message,
      };
    case 'HANDLE_SUBJECT':
      return {
        subject: action.subject,
        name: state.name,
        email: state.email,
        message: state.message,
      };
    case 'HANDLE_EMAIL':
      return {
        email: action.email,
        name: state.name,
        subject: state.subject,
        message: state.message,
      };
    case 'HANDLE_MESSAGE':
      return {
        message: action.message,
        name: state.name,
        subject: state.subject,
        email: state.email,
      };
    default:
      return state;
  }
};

export default handleAction;

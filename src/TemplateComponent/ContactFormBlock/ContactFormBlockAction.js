export const handleName = name => ({
  type: 'HANDLE_NAME',
  name,
});

export const handleSubject = subject => ({
  type: 'HANDLE_SUBJECT',
  subject,
});

export const handleEmail = email => ({
  type: 'HANDLE_EMAIL',
  email,
});

export const handleMessage = message => ({
  type: 'HANDLE_MESSAGE',
  message,
});

export const handleSend = (name, subject, email, message) => ({
  type: 'HANDLE_SEND',
  name,
  subject,
  email,
  message,
});

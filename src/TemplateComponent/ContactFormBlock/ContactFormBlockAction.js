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

export const handleSend = url => ({
  type: 'HANDLE_SEND',
  url,
});

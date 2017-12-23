const loadContent = (primaryTextContent, secondaryTextContent, buttonName) => ({
  type: 'LOAD_BLOCK_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  buttonName,
});

export default loadContent;

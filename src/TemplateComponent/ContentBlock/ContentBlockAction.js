const loadContent = (primaryTextContent, secondaryTextContent, linkName, buttonName) => ({
  type: 'LOAD_BLOCK_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  linkName,
  buttonName,
});

export default loadContent;

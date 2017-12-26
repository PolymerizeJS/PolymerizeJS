const loadContent = (primaryTextContent, secondaryTextContent, anchorName, buttonName) => ({
  type: 'LOAD_BLOCK_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  anchorName,
  buttonName,
});

export default loadContent;

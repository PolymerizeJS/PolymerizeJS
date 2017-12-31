const loadContent = (primaryTextContent, secondaryTextContent, actionItem) => ({
  type: 'LOAD_BLOCK_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  actionItem,
});

export default loadContent;

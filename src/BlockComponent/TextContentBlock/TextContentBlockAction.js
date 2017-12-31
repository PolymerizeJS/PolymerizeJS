const loadContent = (primaryTextContent, secondaryTextContent, actionItem) => ({
  type: 'LOAD_TEXT_BLOCK_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  actionItem,
});

export default loadContent;

const loadContent = (primaryText, secondaryText, actionItem) => ({
  type: 'LOAD_TEXT_BLOCK_CONTENT',
  primaryText,
  secondaryText,
  actionItem,
});

export default loadContent;

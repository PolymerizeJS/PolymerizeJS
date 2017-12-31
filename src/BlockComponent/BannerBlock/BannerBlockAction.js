const loadBannerContent = (primaryTextContent, secondaryTextContent, actionItem) => ({
  type: 'LOAD_BANNER_BLOCK_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  actionItem,
});

export default loadBannerContent;

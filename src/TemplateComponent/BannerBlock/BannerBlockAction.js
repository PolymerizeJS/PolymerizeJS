const loadBannerContent = (primaryTextContent, secondaryTextContent, anchorName, buttonName) => ({
  type: 'LOAD_BANNER_CONTENT',
  primaryTextContent,
  secondaryTextContent,
  anchorName,
  buttonName,
});

export default loadBannerContent;

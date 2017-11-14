const displayOnboardData = (logo, primaryText, secondaryText, smallButton, image) => {
  const action = {
    type: 'BANNER_DISPLAY',
    logo,
    primaryText,
    secondaryText,
    smallButton,
    image,
  };
  return action;
};

export default displayOnboardData;

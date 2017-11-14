import displayOnboardData from '../../src/actions/displayOnboardData';

describe('actions', () => {
  it('it should create an object with data for onboarding display', () => {
    const data = [
      'Polymerize',
      'Styled and configurable templates with reusable components to enable software engineers to create elegant product fast.',
      'Polymerize is created after seeing many talented software engineers struggling to make sense of their UI design. We are constantly thinking ways to make it better. There will be feature every month.',
      'GitHub',
      './img/Alinea.jpg',
    ];
    const expectedAction = {
      type: 'BANNER_DISPLAY',
      logo: 'Polymerize',
      primaryText: 'Styled and configurable templates with reusable components to enable software engineers to create elegant product fast.',
      secondaryText: 'Polymerize is created after seeing many talented software engineers struggling to make sense of their UI design. We are constantly thinking ways to make it better. There will be feature every month.',
      smallButton: 'GitHub',
      image: './img/Alinea.jpg',
    };
    expect(displayOnboardData(...data)).toEqual(expectedAction);
  })
});

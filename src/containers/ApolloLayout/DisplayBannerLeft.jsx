import { connect } from 'react-redux';
// Component import
import BannerLeft from '../../components/ApolloLayout/BannerLeft/BannerLeft';
// Action import
import displayOnboardData from '../../actions/displayOnboardData';

const mapStateToProps = ({ logo, primaryText, secondaryText, smallButton }) => {
  const props = {
    logo,
    primaryText,
    secondaryText,
    smallButton,
  };
  return props;
};

const mapDispatchToProps = dispatch => dispatch(displayOnboardData(
  'Polymerize',
  'Styled and configurable templates with reusable components to enable software engineers to create elegant product fast.',
  'Polymerize is created after seeing many talented software engineers struggling to make sense of their UI design. We are constantly thinking ways to make it better. There will be feature every month.',
  'GitHub',
  ''));

const DisplayBannerLeft = connect(mapStateToProps, mapDispatchToProps)(BannerLeft);

export default DisplayBannerLeft;

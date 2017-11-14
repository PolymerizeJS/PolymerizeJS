import { connect } from 'react-redux';
// Component import
import BannerRight from '../../components/ApolloLayout/BannerRight/BannerRight';
// Action import
import displayOnboardData from '../../actions/displayOnboardData';
// Assets import
import sampleImageOne from '../../assets/apollo/img/Alinea.jpg';
import sampleImageTwo from '../../assets/apollo/img/Apollo.jpg';

const mapStateToProps = ({ image }) => {
  const props = {
    image,
  };
  return props;
};

const mapDispatchToProps = dispatch => dispatch(displayOnboardData(
  'Polymerize',
  'Styled and configurable templates with reusable components to enable software engineers to create elegant product',
  'Polymerize is created after seeing many talented software engineers struggling to make sense of their UI design. We are constantly thinking ways to make it better. There will be feature every month.',
  'GitHub',
  [sampleImageOne, sampleImageTwo]));

const DisplayBannerRight = connect(mapStateToProps, mapDispatchToProps)(BannerRight);

export default DisplayBannerRight;

import { connect } from 'react-redux';

import ContactFormBlockView from './ContactFormBlockView';

const mapStateToProps = state => state.contactFormBlockReducer;

const ContactFormBlock = connect(mapStateToProps)(ContactFormBlockView);

export default ContactFormBlock;

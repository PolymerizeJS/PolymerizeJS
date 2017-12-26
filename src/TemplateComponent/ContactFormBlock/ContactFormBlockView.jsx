import React from 'react';
import PropTypes from 'prop-types';

import SecondaryText from '../../AtomComponent/SecondaryText';
import SmallText from '../../AtomComponent/SmallText';
import FullWidthInput from '../../AtomComponent/FullWidthInput';
import FullWidthTextarea from '../../AtomComponent/FullWidthTextarea';
import MediumButton from '../../AtomComponent/MediumButton';

import {
  handleName,
  handleSubject,
  handleEmail,
  handleMessage,
  handleSend,
} from './ContactFormBlockAction';

import './style.scss';

function ContactFormBlockView({ dispatch, name, subject, email, message }) {
  return (
    <section className="contact-form-block">
      <SecondaryText>Contact Us</SecondaryText>
      <form className="contact-form">
        <SmallText>Name:</SmallText>
        <FullWidthInput
          onChange={e => dispatch(handleName(e.target.value))}
          value={name}
        />
        <SmallText>Subject:</SmallText>
        <FullWidthInput
          onChange={e => dispatch(handleSubject(e.target.value))}
          value={subject}
        />
        <SmallText>Email:</SmallText>
        <FullWidthInput
          onChange={e => dispatch(handleEmail(e.target.value))}
          value={email}
        />
        <SmallText>Message:</SmallText>
        <FullWidthTextarea
          onChange={e => dispatch(handleMessage(e.target.value))}
          value={message}
        />
        <MediumButton
          onClick={() => dispatch(handleSend(''))}
        >
          Send
        </MediumButton>
      </form>
    </section>
  );
}

ContactFormBlockView.defaultProps = {
  name: '',
  subject: '',
  email: '',
  message: '',
};

ContactFormBlockView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string,
  subject: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
};

export default ContactFormBlockView;

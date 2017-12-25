import React from 'react';

import SecondaryText from '../../AtomComponent/SecondaryText';
import SmallText from '../../AtomComponent/SmallText';
import HalfWidthInput from '../../AtomComponent/HalfWidthInput';
import HalfWidthTextarea from '../../AtomComponent/HalfWidthTextarea';
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
        <HalfWidthInput
          onChange={e => dispatch(handleName(e.target.value))}
          value={name}
        />
        <SmallText>Subject:</SmallText>
        <HalfWidthInput
          onChange={e => dispatch(handleSubject(e.target.value))}
          value={subject}
        />
        <SmallText>Email:</SmallText>
        <HalfWidthInput
          onChange={e => dispatch(handleEmail(e.target.value))}
          value={email}
        />
        <SmallText>Message:</SmallText>
        <HalfWidthTextarea
          onChange={e => dispatch(handleMessage(e.target.value))}
          value={message}
        />
        <MediumButton>Send</MediumButton>
      </form>
    </section>
  );
}

export default ContactFormBlockView;

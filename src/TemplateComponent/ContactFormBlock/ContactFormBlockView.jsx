import React from 'react';

import SecondaryText from '../../AtomComponent/SecondaryText';
import SmallText from '../../AtomComponent/SmallText';
import HalfWidthInput from '../../AtomComponent/HalfWidthInput';
import HalfWidthTextarea from '../../AtomComponent/HalfWidthTextarea';

import './style.scss';

function ContactFormBlockView() {
  return (
    <section className="contact-form-block">
      <SecondaryText>Contact Us</SecondaryText>
      <form className="contact-form" action="POST">
        <SmallText>Name:</SmallText>
        <HalfWidthInput />
        <SmallText>Subject:</SmallText>
        <HalfWidthInput />
        <SmallText>Email:</SmallText>
        <HalfWidthInput />
        <SmallText>Content:</SmallText>
        <HalfWidthTextarea />
      </form>
    </section>
  );
}

export default ContactFormBlockView;

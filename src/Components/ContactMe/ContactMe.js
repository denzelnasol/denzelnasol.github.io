import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { serviceId, templateId, publicKey } from "emailkey";

// Styling
import './style.scss'

const ContactMe = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target)
    await emailjs.sendForm(serviceId, templateId, event.target, publicKey);
    setEmail('');
    setName('');
    setMessage('');
  };


  return (
    <div className="contact-me" id="contact">
      <div className="contact-title">
        Contact Me
      </div>

      <div className="contact-description">
        Communicate with me by sending an email below, and I'll get back to you as soon as possible!
      </div>

      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>

          <label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              name="name"
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              name="email"
            />
          </label>

          <label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              name="message"
            />
          </label>

          <button type="submit">Send</button>
        </form>
      </div>

    </div>
  );
}

export default ContactMe;
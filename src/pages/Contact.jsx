import { useState } from 'react';
import "../styles/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validate name field
    if (!name.trim()) {
      formErrors = { ...formErrors, name: 'Name is required' };
    }

    // Validate email field
    if (!email.trim()) {
      formErrors = { ...formErrors, email: 'Email is required' };
    } else if (!validateEmail(email)) {
      formErrors = { ...formErrors, email: 'Invalid email address' };
    }

    // Validate message field
    if (!message.trim()) {
      formErrors = { ...formErrors, message: 'Message is required' };
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmissionMessage('Thank you, your message has been submitted.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleSubmit}
            required
            className="contact-input"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleSubmit}
            required
            className="contact-input"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            onBlur={handleSubmit}
            required
            className="contact-input"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="error-container">
          {Object.keys(errors).some((key) => errors[key]) && (
            <p className="error">Please fill out all required fields correctly.</p>
          )}
        </div>
        <div className="submission-message">
          {submissionMessage && <p>{submissionMessage}</p>}
        </div>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

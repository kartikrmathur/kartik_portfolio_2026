import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const { email, phone, location } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Replace these IDs with your own from https://www.emailjs.com/
      await emailjs.send(
        'service_1p1clar',
        'template_nf17tq5',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'uhI9Odz8XhQAZvNUD'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="section__container">
        <h2 className="section__heading" data-aos="fade-up">
          Get In <span>Touch</span>
        </h2>
        <p className="section__subheading" data-aos="fade-up" data-aos-delay="100">
          Have a project in mind? Let's talk about it.
        </p>

        <div className="contact__grid">
          <div className="contact__info" data-aos="fade-right" data-aos-delay="200">
            <div className="contact__info-item">
              <FaEnvelope className="contact__info-icon" />
              <div>
                <h4>Email</h4>
                <p>{email}</p>
              </div>
            </div>
            <div className="contact__info-item">
              <FaPhoneAlt className="contact__info-icon" />
              <div>
                <h4>Phone</h4>
                <p>{phone}</p>
              </div>
            </div>
            <div className="contact__info-item">
              <FaMapMarkerAlt className="contact__info-icon" />
              <div>
                <h4>Location</h4>
                <p>{location}</p>
              </div>
            </div>
          </div>

          <form
            className="contact__form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-delay="300"
            noValidate
          >
            <div className="contact__field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'contact__input--error' : ''}
              />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            <div className="contact__field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'contact__input--error' : ''}
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'contact__input--error' : ''}
              />
              {errors.subject && <span className="contact__error">{errors.subject}</span>}
            </div>

            <div className="contact__field">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'contact__input--error' : ''}
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="contact__status contact__status--success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

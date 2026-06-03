import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import emailjs from 'emailjs-com';
import MaterialIcon from '../MaterialIcon/MaterialIcon';
import portfolioData from '../../data/portfolioData';

const Contact = ({ variant = 'cta' }) => {
  const { email, github, linkedin } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
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
      await emailjs.send(
        'service_1p1clar',
        'template_nf17tq5',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Portfolio contact',
          message: formData.message,
        },
        'uhI9Odz8XhQAZvNUD'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'full') {
    return (
      <section className="reveal grid grid-cols-1 gap-gutter border-t border-outline-variant/10 pt-section-gap lg:grid-cols-12" id="contact">
        <div className="space-y-8 lg:col-span-4">
          <header>
            <span className="mb-4 block font-mono text-label-caps tracking-widest text-secondary">
              {'// COLLABORATE'}
            </span>
            <h2 className="font-display text-headline-lg text-on-surface">
              Let&apos;s build something <br />
              <span className="text-primary-container">persistent.</span>
            </h2>
          </header>
          <p className="text-on-surface-variant">
            Available for architectural consultation, backend development, or
            Android engineering roles.
          </p>
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
              <MaterialIcon name="mail" className="text-primary-container" />
            </div>
            <div>
              <span className="block font-mono text-label-caps text-on-surface-variant">
                EMAIL
              </span>
              <span className="font-medium text-on-surface">{email}</span>
            </div>
          </a>
          <div className="flex gap-4">
            {[
              { href: github, icon: 'code' },
              { href: linkedin, icon: 'share' },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-high transition-all hover:-translate-y-1 hover:bg-secondary/20"
              >
                <MaterialIcon name={icon} className="text-secondary" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="glass-card relative overflow-hidden rounded-2xl p-8 md:p-12">
            <form
              className="relative z-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-gutter"
              onSubmit={handleSubmit}
              noValidate
            >
              {[
                { name: 'name', label: 'NAME', type: 'text', half: true },
                { name: 'email', label: 'EMAIL ADDRESS', type: 'email', half: true },
              ].map(({ name, label, type, half }) => (
                <div key={name} className={`space-y-2 ${half ? '' : 'md:col-span-2'}`}>
                  <label
                    htmlFor={`contact-${name}`}
                    className="font-mono text-label-caps text-on-surface-variant"
                  >
                    {label}
                  </label>
                  <input
                    id={`contact-${name}`}
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="form-input w-full py-2 text-on-surface"
                  />
                  {errors[name] && (
                    <p className="text-sm text-error">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-label-caps text-on-surface-variant"
                >
                  PROJECT BRIEF / MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input w-full resize-none py-2 text-on-surface"
                  placeholder="Describe the architectural challenge..."
                />
                {errors.message && (
                  <p className="text-sm text-error">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-end md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="technical-glow group flex items-center gap-3 rounded-lg bg-primary-container px-10 py-4 font-mono text-label-caps text-on-primary transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                  <MaterialIcon
                    name="send"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>

              {status === 'success' && (
                <p className="text-center text-sm text-primary-container md:col-span-2">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-error md:col-span-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="reveal relative overflow-hidden bg-surface-container-lowest py-section-gap"
      id="contact"
    >
      <div className="relative z-10 mx-auto max-w-container-max space-y-gutter px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mx-auto max-w-4xl font-display text-display-lg-mobile text-on-surface md:text-display-lg">
          Ready to Scale Your Next{' '}
          <span className="italic text-primary-container">Ambition</span>?
        </h2>
        <p className="mx-auto max-w-2xl font-mono text-body-lg text-on-surface-variant">
          Currently accepting Senior Engineer roles or Lead positions for
          high-impact Android and backend systems.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <RouterLink
            to="/me#contact"
            className="technical-glow rounded-lg bg-primary-container px-10 py-5 font-mono text-label-caps text-on-primary transition-transform hover:scale-[1.02] active:scale-95"
          >
            Schedule Briefing
          </RouterLink>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-label-caps text-on-surface transition-colors hover:text-primary-container"
          >
            View GitHub
            <MaterialIcon name="link" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 pt-4">
          {[
            { label: 'LINKEDIN', href: linkedin },
            { label: 'EMAIL', href: `mailto:${email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-mono text-label-caps text-on-surface-variant transition-colors hover:text-primary-container"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

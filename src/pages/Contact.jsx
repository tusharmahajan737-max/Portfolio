import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const EMPTY = { name: '', email: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(EMPTY);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setSent(false);
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: send `form` to your backend / EmailJS / Formspree here
        console.log('Contact form:', form);
        setSent(true);
        setForm(EMPTY);
    };

    return (
        <section className="page-section container-xl">
            <div className="section-heading">
                <p className="eyebrow">Start a conversation</p>
                <h1 className="section-title">
                    Get in <span className="highlight">touch</span>
                </h1>
            </div>
            <div className="row g-4 g-lg-5">
                <div className="col-lg-7">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label className="form-label" htmlFor="contact-name">
                                Your name
                            </label>
                            <input
                                className="form-control"
                                id="contact-name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="contact-email">
                                Email address
                            </label>
                            <input
                                className="form-control"
                                id="contact-email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="contact-message">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="contact-message"
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="cv-btn btn">
                            Send message
                        </button>
                        {sent && (
                            <p className="form-status" role="status">
                                Thank you! Your message has been received.
                            </p>
                        )}
                    </form>
                </div>

                <aside className="col-lg-5 contact-info">
                    <h2>Contact details</h2>
                    <a href="mailto:tushar@example.com">
                        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> tushar@example.com
                    </a>
                    <a href="tel:+919876543210">
                        <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +91 98765 43210
                    </a>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> Pune, Maharashtra, India
                    </p>
                    <a
                        className="contact-social"
                        href="https://www.linkedin.com/in/tushar-mahajan-a18918371/"
                        target="_blank"
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" /> LinkedIn
                    </a>
                </aside>
            </div>
        </section>
    );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CVButton from '../components/CVButton.jsx';

export default function Home() {
    return (
        <section className="hero-section container-xl">
            <div className="row align-items-center g-4 g-lg-5">
                <div className="col-lg-7 order-2 order-lg-1">
                    <p className="eyebrow">Computer science / Web development</p>
                    <h1 className="hero-title">
                        Thoughtful code.
                        <br />
                        <span>Useful experiences.</span>
                    </h1>
                    <h2 className="hero-role">
                        Hello, I’m Tushar Mahajan, a <span className="highlight">Java Developer</span>.
                    </h2>
                    <p className="hero-copy">
                        I’m a Computer Science student interested in building responsive web experiences and growing across frontend and
                        backend development.
                    </p>
                    <div className="hero-actions d-flex flex-wrap align-items-center gap-3">
                        <CVButton />
                        <a
                            className="social-link"
                            href="https://www.linkedin.com/in/tushar-mahajan-a18918371/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Tushar Mahajan on LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                    <div className="hero-portrait">
                        <img src="/img_1.jpg" alt="Portrait of Tushar Mahajan" />
                        <span className="portrait-caption">Based in Pune, India</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

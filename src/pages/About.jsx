import CVButton from '../components/CVButton.jsx';

export default function About() {
    return (
        <section className="page-section container-xl">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-xl-8">
                    <p className="eyebrow">A little context</p>
                    <h1 className="section-title">
                        About <span className="highlight">me</span>
                    </h1>
                    <div className="about-copy">
                        <h2>Hello, I’m Tushar Mahajan.</h2>
                        <p>
                            I am a Computer Science student passionate about web development and programming. My interests include building
                            responsive websites, learning JavaScript fundamentals, and exploring backend technologies like PHP &amp; MySQL.
                        </p>
                        <p>
                            I enjoy solving coding challenges, experimenting with UI design, and continuously improving my skills in React,
                            Node.js, and Java Servlets.
                        </p>
                        <CVButton />
                    </div>
                </div>
            </div>
        </section>
    );
}

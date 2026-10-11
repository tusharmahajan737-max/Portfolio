import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPhp, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const SKILLS = [
    { icon: faHtml5, name: 'HTML', text: 'Building structured web pages with semantic tags.' },
    { icon: faCss3Alt, name: 'CSS', text: 'Styling layouts with responsive design and animations.' },
    { icon: faJs, name: 'JavaScript', text: 'Adding interactivity and dynamic features to websites.' },
    { icon: faPhp, name: 'PHP & MySQL', text: 'Backend development and database management.' },
    { icon: faReact, name: 'React', text: 'Creating reusable components and modern UIs.' },
    { icon: faNodeJs, name: 'Node.js', text: 'Server-side scripting and full-stack development basics.' },
];

export default function Skills() {
    return (
        <section className="page-section container-xl">
            <div className="section-heading">
                <p className="eyebrow">Tools I work with</p>
                <h1 className="section-title">
                    My <span className="highlight">skills</span>
                </h1>
            </div>
            <div className="row g-3 g-lg-4">
                {SKILLS.map((s) => (
                    <div className="col-sm-6 col-lg-4" key={s.name}>
                        <article className="skill-card h-100">
                            <FontAwesomeIcon icon={s.icon} className="skill-icon" aria-hidden="true" />
                            <h2>{s.name}</h2>
                            <p>{s.text}</p>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}

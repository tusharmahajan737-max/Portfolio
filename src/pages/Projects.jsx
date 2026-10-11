import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const PROJECTS = [
    {
        title: 'ShopsKart',
        text: 'A responsive React shopping app with product browsing, categories, a cart, account pages, validated sign-in and registration, and theme settings.',
        githubUrl: 'https://github.com/tusharmahajan737-max/ShopsKart-_Online_Shopping_App',
    },
    {
        title: 'LearningPoint',
        text: 'A study-material portal with course information, downloadable learning resources, and responsive pages for getting started and contacting the team.',
        githubUrl: 'https://github.com/tusharmahajan737-max/LearningPoint-Online-StudyMaterial-Portal',
    },
    {
        title: 'Protfolio',
        text: 'A personal portfolio showcasing my background, development skills, selected projects, and contact information in a responsive React experience.',
        githubUrl: null,
    },
];

export default function Projects() {
    return (
        <section className="page-section container-xl">
            <div className="section-heading">
                <p className="eyebrow">Selected work</p>
                <h1 className="section-title">
                    Recent <span className="highlight">projects</span>
                </h1>
            </div>
            <div className="row g-3 g-lg-4">
                {PROJECTS.map((project, index) => (
                    <div className="col-md-6 col-xl-4" key={project.title}>
                        <article className="project-card h-100">
                            <span className="project-number">0{index + 1} / PROJECT</span>
                            <h2>{project.title}</h2>
                            <p>{project.text}</p>
                            {project.githubUrl ? (
                                <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                                    GitHub repository
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                                </a>
                            ) : (
                                <span className="project-link is-unavailable">GitHub repository not available</span>
                            )}
                        </article>
                    </div>
                ))}
            </div>
        </section>
    );
}

import { NavLink } from 'react-router-dom';
import { Collapse } from 'bootstrap';

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const closeMobileMenu = () => {
        if (window.matchMedia('(max-width: 991.98px)').matches) {
            const menu = document.getElementById('primary-navigation');
            if (menu) Collapse.getOrCreateInstance(menu).hide();
        }
    };

    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-xl">
                    <NavLink className="navbar-brand" to="/" onClick={closeMobileMenu}>
                        Tushar <span>Mahajan</span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#primary-navigation"
                        aria-controls="primary-navigation"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="primary-navigation">
                        <ul className="navbar-nav ms-lg-auto">
                            {LINKS.map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        end={to === '/'}
                                        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                                        onClick={closeMobileMenu}>
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';

const TITLES = {
    '/': '',
    '/about': 'About Me',
    '/skills': 'Skills',
    '/projects': 'Projects',
    '/contact': 'Contact',
};

export default function Layout() {
    const { pathname } = useLocation();
    const page = TITLES[pathname] ?? '';

    useEffect(() => {
        document.title = page ? `Portfolio | ${page}` : 'Portfolio | Tushar Mahajan';
    }, [page]);

    return (
        <div className="site-shell">
            <Navbar />
            <main className="site-main">
                <Outlet />
            </main>
            <footer className="site-footer">
                <div className="container-xl d-flex flex-column flex-sm-row justify-content-between gap-2">
                    <span>
                        Tushar Mahajan <span className="footer-accent">/ Portfolio</span>
                    </span>
                    <span>Designed and built with care.</span>
                </div>
            </footer>
        </div>
    );
}

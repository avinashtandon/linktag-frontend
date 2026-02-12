import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>🔖 LinkTag</h3>
                    <p>Save and organize your links with ease</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tags">Tags</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>About</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/privacy">Privacy</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="https://github.com/avinashtandon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                        <a href="https://x.com/avinasht07" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
                        <a href="https://www.linkedin.com/in/avinash-tandon-7374382b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} LinkTag. All rights reserved.</p>
            </div>
        </footer>
    );
}


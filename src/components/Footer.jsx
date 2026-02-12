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
                        <li><a href="/">Home</a></li>
                        <li><a href="/tags">Tags</a></li>
                        <li><a href="/search">Search</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>About</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#" aria-label="GitHub">GitHub</a>
                        <a href="#" aria-label="Twitter">Twitter</a>
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} LinkTag. All rights reserved.</p>
            </div>
        </footer>
    );
}

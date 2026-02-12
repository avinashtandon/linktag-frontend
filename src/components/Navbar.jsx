import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h2>🔖 LinkTag</h2>
                </div>
                <ul className="navbar-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/tags">Tags</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div className="navbar-actions">
                    <button className="btn-login">Login</button>
                    <button className="btn-signup">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}
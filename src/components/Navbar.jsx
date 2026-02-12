import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h2>🔖 LinkTag</h2>
                </div>
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tags">Tags</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="navbar-actions">
                    <Link to="/login"><button className="btn-login">Login</button></Link>
                    <button className="btn-signup">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}
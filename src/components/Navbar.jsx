import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'))

    // Keep in sync when storage changes (e.g. after login/logout in same tab)
    useEffect(() => {
        const sync = () => setIsLoggedIn(!!localStorage.getItem('access_token'))
        window.addEventListener('storage', sync)
        // Also poll so same-tab login/logout updates the navbar
        const id = setInterval(sync, 500)
        return () => { window.removeEventListener('storage', sync); clearInterval(id) }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('token_expires_at')
        setIsLoggedIn(false)
        navigate('/')
    }

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
                    {isLoggedIn && <li><Link to="/my-links">My Links</Link></li>}
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="navbar-actions">
                    {isLoggedIn ? (
                        <>
                            <Link to="/create"><button className="btn-new">+ New LinkTag</button></Link>
                            <button className="btn-logout" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button className="btn-login">Login</button></Link>
                            <Link to="/signup"><button className="btn-signup">Sign Up</button></Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
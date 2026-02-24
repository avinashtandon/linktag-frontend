import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import '../pages/MyLinktags.css';

const API_BASE = '/api/v1'

export default function HomePage() {
    const isLoggedIn = !!localStorage.getItem('access_token')
    const [linktags, setLinktags] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(isLoggedIn)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!isLoggedIn) return

        const fetchLinktags = async () => {
            try {
                const response = await fetch(`${API_BASE}/linktags/`, {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` },
                })
                let data = {}
                const text = await response.text()
                try { if (text) data = JSON.parse(text) } catch { data = { message: text } }

                if (!response.ok) {
                    const errObj = data.error || data
                    setError(typeof errObj?.message === 'string' ? errObj.message : `Error ${response.status}`)
                    return
                }
                setLinktags(data.data?.linktags || [])
                setTotal(data.data?.total || 0)
            } catch (err) {
                setError(`Network error: ${err.message}`)
            } finally {
                setLoading(false)
            }
        }

        fetchLinktags()
    }, [isLoggedIn])

    /* ── Logged-in dashboard ── */
    if (isLoggedIn) {
        return (
            <div className="mylinktags-page">
                <div className="mylinktags-container">
                    <div className="mylinktags-header">
                        <div>
                            <h1>🔖 My LinkTags</h1>
                            {!loading && !error && (
                                <p>{total} link{total !== 1 ? 's' : ''} saved</p>
                            )}
                        </div>
                        <Link to="/create">
                            <button className="btn-create">+ New LinkTag</button>
                        </Link>
                    </div>

                    {loading && (
                        <div className="state-box">
                            <div className="spinner" />
                            <p>Loading your links…</p>
                        </div>
                    )}

                    {error && <div className="state-box error">{error}</div>}

                    {!loading && !error && linktags.length === 0 && (
                        <div className="state-box empty">
                            <p>No LinkTags yet.</p>
                            <Link to="/create"><button className="btn-create">Create your first one</button></Link>
                        </div>
                    )}

                    {!loading && !error && linktags.length > 0 && (
                        <div className="linktag-grid">
                            {linktags.map((lt) => (
                                <div className="linktag-card" key={lt.id}>
                                    <div className="linktag-card-top">
                                        <span className="tag-badge">#{lt.tag}</span>
                                        <span className="linktag-date">
                                            {new Date(lt.created_at).toLocaleDateString('en-GB', {
                                                day: 'numeric', month: 'short', year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    <a className="linktag-url" href={lt.url} target="_blank" rel="noreferrer">
                                        {lt.url}
                                    </a>
                                    {lt.description && <p className="linktag-desc">{lt.description}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    /* ── Guest landing page ── */
    return (
        <main className="homepage">
            <section className="hero">
                <h1>🔖 Welcome to LinkTag</h1>
                <p>Save, organize, and manage your links with ease</p>
                <div className="cta-buttons">
                    <Link to="/signup"><button className="btn-primary">Get Started</button></Link>
                    <Link to="/about"><button className="btn-secondary">Learn More</button></Link>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">📌</div>
                    <h3>Save Links</h3>
                    <p>Quickly save and bookmark your favorite links</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🏷️</div>
                    <h3>Organize with Tags</h3>
                    <p>Categorize your links with custom tags</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🔍</div>
                    <h3>Easy Search</h3>
                    <p>Find your links instantly with powerful search</p>
                </div>
            </section>
        </main>
    );
}


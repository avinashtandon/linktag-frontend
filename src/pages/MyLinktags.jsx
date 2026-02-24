import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLinkTags } from '../hooks/useLinkTags'
import './MyLinktags.css'

function MyLinktags() {
    const navigate = useNavigate()
    const { linktags, total, loading, loadingMore, error, hasMore, fetchPage, loadMore } = useLinkTags()

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (!token) { navigate('/login'); return }
        fetchPage()
    }, [fetchPage, navigate])

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
                    <>
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

                        <div className="pagination-footer">
                            {hasMore ? (
                                <button
                                    className="btn-load-more"
                                    onClick={loadMore}
                                    disabled={loadingMore}
                                >
                                    {loadingMore ? (
                                        <><span className="btn-spinner" /> Loading…</>
                                    ) : 'Load More'}
                                </button>
                            ) : (
                                <p className="end-label">You've reached the end ✓</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MyLinktags

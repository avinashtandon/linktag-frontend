import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './MyLinktags.css'

const API_BASE = '/api/v1'

function MyLinktags() {
    const navigate = useNavigate()
    const [linktags, setLinktags] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (!token) {
            navigate('/login')
            return
        }

        const fetchLinktags = async () => {
            try {
                const response = await fetch(`${API_BASE}/linktags/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })

                let data = {}
                const text = await response.text()
                try {
                    if (text) data = JSON.parse(text)
                } catch {
                    data = { message: text }
                }

                if (!response.ok) {
                    const errObj = data.error || data
                    let errMsg = `Error ${response.status}: Failed to load LinkTags.`
                    if (typeof errObj === 'string') errMsg = errObj
                    else if (errObj?.message) errMsg = typeof errObj.message === 'string' ? errObj.message : JSON.stringify(errObj.message)
                    setError(errMsg)
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
    }, [navigate])

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

                {error && (
                    <div className="state-box error">{error}</div>
                )}

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
                                <a
                                    className="linktag-url"
                                    href={lt.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {lt.url}
                                </a>
                                {lt.description && (
                                    <p className="linktag-desc">{lt.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyLinktags

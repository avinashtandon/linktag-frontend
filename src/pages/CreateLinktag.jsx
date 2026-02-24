import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateLinktag.css'

const API_BASE = '/api/v1'

function CreateLinktag() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ url: '', description: '', tag: '' })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError('')
        setSuccess(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(null)

        const token = localStorage.getItem('access_token')
        if (!token) {
            setError('You must be logged in to create a LinkTag.')
            setLoading(false)
            navigate('/login')
            return
        }

        try {
            const response = await fetch(`${API_BASE}/linktags/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    url: formData.url,
                    description: formData.description,
                    tag: formData.tag,
                }),
            })

            let data = {}
            const text = await response.text()
            try {
                if (text) data = JSON.parse(text)
            } catch {
                data = { message: text }
            }

            console.log('CreateLinktag response:', response.status, data)

            if (!response.ok) {
                const errObj = data.error || data
                let errMsg = `Error ${response.status}: Failed to create LinkTag.`
                if (typeof errObj === 'string') errMsg = errObj
                else if (errObj?.message) errMsg = typeof errObj.message === 'string' ? errObj.message : JSON.stringify(errObj.message)
                else if (data.message) errMsg = typeof data.message === 'string' ? data.message : JSON.stringify(data.message)
                setError(errMsg)
                return
            }

            setSuccess(data.data)
            setFormData({ url: '', description: '', tag: '' })
        } catch (err) {
            console.error('CreateLinktag error:', err)
            setError(`Network error: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="create-page">
            <div className="create-card">
                <div className="create-header">
                    <h1>🔗 New LinkTag</h1>
                    <p>Save and tag a link to your collection</p>
                </div>

                <form className="create-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input
                            id="url"
                            type="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            placeholder="https://example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="My cool link"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input
                            id="tag"
                            type="text"
                            name="tag"
                            value={formData.tag}
                            onChange={handleChange}
                            placeholder="dev"
                            required
                        />
                    </div>

                    {error && <div className="form-error">{error}</div>}

                    {success && (
                        <div className="form-success">
                            ✅ LinkTag created! <strong>#{success.id}</strong> — <a href={success.url} target="_blank" rel="noreferrer">{success.url}</a>{' '}
                            <span className="tag-badge">#{success.tag}</span>
                        </div>
                    )}

                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? 'Saving…' : 'Create LinkTag'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateLinktag

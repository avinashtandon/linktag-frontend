import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'

const API_BASE = '/api/v1'

function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch(`${API_BASE}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            })

            // Safely parse body — backend may return empty or non-JSON on some errors
            let data = {}
            const text = await response.text()
            try {
                if (text) data = JSON.parse(text)
            } catch {
                data = { message: text }
            }

            console.log('Signup response:', response.status, data)

            if (!response.ok) {
                // Backend returns { success: false, error: { message, code, ... } }
                const errObj = data.error || data
                let errMsg = `Error ${response.status}: Signup failed.`
                if (typeof errObj === 'string') {
                    errMsg = errObj
                } else if (errObj?.message) {
                    errMsg = typeof errObj.message === 'string'
                        ? errObj.message
                        : JSON.stringify(errObj.message)
                } else if (data.message) {
                    errMsg = typeof data.message === 'string'
                        ? data.message
                        : JSON.stringify(data.message)
                }
                setError(errMsg)
                return
            }

            // Success — redirect to login
            navigate('/login')
        } catch (err) {
            console.error('Signup fetch error:', err)
            setError(`Network error: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="signup-page">
            <div className="signup-card">
                <div className="signup-header">
                    <h1>🔖 Create Account</h1>
                    <p>Join LinkTag to start organising your links</p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="user@example.com"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="SecurePass123!"
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    {error && <div className="form-error">{error}</div>}

                    <button
                        type="submit"
                        className="btn-submit"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account…' : 'Sign Up'}
                    </button>
                </form>

                <p className="login-link">
                    Already have an account?{' '}
                    <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup

export function clearTokens() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('token_expires_at')
    // Trigger storage event so Navbar/HomePage sync immediately
    window.dispatchEvent(new Event('storage'))
}

export function isTokenExpired() {
    const expiresAt = localStorage.getItem('token_expires_at')
    if (!expiresAt) return false
    return Date.now() >= Number(expiresAt)
}

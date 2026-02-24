import { useState, useCallback } from 'react'
import { clearTokens, isTokenExpired } from '../utils/auth'

const API_BASE = '/api/v1'
const PAGE_SIZE = 20

export function useLinkTags() {
    const [linktags, setLinktags] = useState([])
    const [nextCursor, setNextCursor] = useState(null)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [error, setError] = useState('')

    const buildUrl = (cursor) => {
        const params = new URLSearchParams({ limit: PAGE_SIZE })
        if (cursor) params.set('cursor', cursor)
        return `${API_BASE}/linktags/?${params.toString()}`
    }

    const fetchPage = useCallback(async (cursor = null, append = false) => {
        // Proactive expiry check before making the request
        if (isTokenExpired()) {
            clearTokens()
            return
        }

        const token = localStorage.getItem('access_token')
        if (!token) return

        append ? setLoadingMore(true) : setLoading(true)
        setError('')

        try {
            const response = await fetch(buildUrl(cursor), {
                headers: { Authorization: `Bearer ${token}` },
            })

            // 401 = token rejected by server → auto-logout
            if (response.status === 401) {
                clearTokens()
                return
            }

            let data = {}
            const text = await response.text()
            try { if (text) data = JSON.parse(text) } catch { data = { message: text } }

            if (!response.ok) {
                const errObj = data.error || data
                const msg = typeof errObj?.message === 'string'
                    ? errObj.message
                    : `Error ${response.status}`
                setError(msg)
                return
            }

            const incoming = data.data?.linktags || []
            const cursor_next = data.data?.next_cursor ?? ''

            setLinktags((prev) => append ? [...prev, ...incoming] : incoming)
            setNextCursor(cursor_next)
            setTotal(data.data?.total ?? incoming.length)
        } catch (err) {
            setError(`Network error: ${err.message}`)
        } finally {
            setLoading(false)
            setLoadingMore(false)
        }
    }, [])

    const loadMore = useCallback(() => {
        if (nextCursor) fetchPage(nextCursor, true)
    }, [nextCursor, fetchPage])

    const reset = useCallback(() => {
        setLinktags([])
        setNextCursor(null)
        setTotal(0)
        setError('')
        setLoading(false)
        setLoadingMore(false)
    }, [])

    const hasMore = nextCursor !== '' && nextCursor !== null

    return { linktags, total, loading, loadingMore, error, nextCursor, hasMore, fetchPage, loadMore, reset }
}

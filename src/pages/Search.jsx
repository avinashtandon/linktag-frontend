import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className="search-page">
            <div className="search-container">
                {/* Hero Section */}
                <section className="search-hero">
                    <h1>Powerful Search</h1>
                    <p>Find any link instantly with our advanced search capabilities</p>
                </section>

                {/* What is Search Section */}
                <section className="search-section">
                    <h2>Never Lose a Link Again</h2>
                    <p>
                        Our powerful search feature helps you find exactly what you're looking for in seconds.
                        Search by link title, URL, tags, or even description. No more endless scrolling through
                        bookmarks - just type and find.
                    </p>
                </section>

                {/* Search Features */}
                <section className="search-section">
                    <h2>Search Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Instant Results</h3>
                            <p>Get real-time search results as you type, no waiting required</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏷️</div>
                            <h3>Tag Filtering</h3>
                            <p>Filter your search results by one or multiple tags for precision</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔤</div>
                            <h3>Smart Matching</h3>
                            <p>Fuzzy search finds results even with typos or partial matches</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📅</div>
                            <h3>Date Filters</h3>
                            <p>Search links saved within specific time periods</p>
                        </div>
                    </div>
                </section>

                {/* How to Search Section */}
                <section className="search-section">
                    <h2>How to Search</h2>
                    <div className="search-methods">
                        <div className="method-card">
                            <div className="method-number">1</div>
                            <h3>By Keyword</h3>
                            <p>Type any word from the link title, URL, or description</p>
                            <div className="example-box">
                                <span className="example-label">Example:</span>
                                <code>"react tutorial"</code>
                            </div>
                        </div>
                        <div className="method-card">
                            <div className="method-number">2</div>
                            <h3>By Tag</h3>
                            <p>Click on tags or type tag names to filter results</p>
                            <div className="example-box">
                                <span className="example-label">Example:</span>
                                <code>tag:javascript</code>
                            </div>
                        </div>
                        <div className="method-card">
                            <div className="method-number">3</div>
                            <h3>Combined Search</h3>
                            <p>Mix keywords and tags for precise results</p>
                            <div className="example-box">
                                <span className="example-label">Example:</span>
                                <code>"design" tag:inspiration</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search Tips */}
                <section className="search-section tips-section">
                    <h2>Search Tips</h2>
                    <div className="tips-grid">
                        <div className="tip-item">
                            <span className="tip-icon">💡</span>
                            <p><strong>Use quotes</strong> for exact phrase matching</p>
                        </div>
                        <div className="tip-item">
                            <span className="tip-icon">💡</span>
                            <p><strong>Combine multiple tags</strong> to narrow down results</p>
                        </div>
                        <div className="tip-item">
                            <span className="tip-icon">💡</span>
                            <p><strong>Search is case-insensitive</strong> - type however you like</p>
                        </div>
                        <div className="tip-item">
                            <span className="tip-icon">💡</span>
                            <p><strong>Use partial words</strong> - "java" finds "javascript"</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="search-cta">
                    <h2>Start Searching Your Links</h2>
                    <p>Sign in to access powerful search across all your saved links</p>
                    <button className="cta-button">Get Started</button>
                </section>
            </div>
        </div>
    )
}

export default Search

import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                {/* Hero Section */}
                <section className="about-hero">
                    <h1 className="about-title">About LinkTag</h1>
                    <p className="about-subtitle">
                        Your smart companion for organizing, managing, and discovering links with powerful tagging
                    </p>
                </section>

                {/* Features Section */}
                <section className="about-section">
                    <h2>What We Offer</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🔖</div>
                            <h3>Smart Tagging</h3>
                            <p>Organize links with custom tags for easy categorization and retrieval</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔍</div>
                            <h3>Powerful Search</h3>
                            <p>Find any link instantly with our advanced search functionality</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive Design</h3>
                            <p>Access your links seamlessly across all your devices</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔐</div>
                            <h3>Secure & Private</h3>
                            <p>Your data is protected with industry-standard security measures</p>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="about-section">
                    <h2>How It Works</h2>
                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Add Your Links</h3>
                            <p>Simply paste any URL you want to save</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Tag & Organize</h3>
                            <p>Add relevant tags to categorize your links</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Search & Discover</h3>
                            <p>Find your links instantly using tags or search</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta">
                    <h2>Ready to Get Started?</h2>
                    <p>Join thousands of users who have simplified their link management</p>
                    <button className="cta-button">Start Organizing Now</button>
                </section>
            </div>
        </div>
    )
}

export default About

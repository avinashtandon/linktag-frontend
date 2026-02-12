import React from 'react'
import './Tags.css'

function Tags() {
    return (
        <div className="tags-page">
            <div className="tags-container">
                {/* Header */}
                <section className="tags-hero">
                    <h1>Organize with Tags</h1>
                    <p>Powerful tagging system to categorize and manage your links effortlessly</p>
                </section>

                {/* What are Tags Section */}
                <section className="tags-section">
                    <h2>What are Tags?</h2>
                    <p>
                        Tags are labels you can attach to your links to organize them into meaningful categories.
                        Think of them as digital sticky notes that help you quickly find and group related content.
                        Whether it's work projects, personal interests, or learning resources, tags make organization simple.
                    </p>
                </section>

                {/* Benefits Section */}
                <section className="tags-section">
                    <h2>Why Use Tags?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🎯</div>
                            <h3>Quick Organization</h3>
                            <p>Instantly categorize your links with custom tags that make sense to you</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🔍</div>
                            <h3>Easy Discovery</h3>
                            <p>Find all links related to a topic by simply clicking on a tag</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎨</div>
                            <h3>Visual Clarity</h3>
                            <p>Color-code your tags to visually distinguish different categories</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">♾️</div>
                            <h3>Unlimited Flexibility</h3>
                            <p>Create as many tags as you need and apply multiple tags to each link</p>
                        </div>
                    </div>
                </section>

                {/* How Tags Work Section */}
                <section className="tags-section">
                    <h2>How Tags Work</h2>
                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Create Tags</h3>
                            <p>Define custom tags that match your organizational style</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Apply to Links</h3>
                            <p>Add one or more tags to each link you save</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Filter & Search</h3>
                            <p>Browse by tag or combine tags to find exactly what you need</p>
                        </div>
                    </div>
                </section>

                {/* Examples Section */}
                <section className="tags-section examples-section">
                    <h2>Tag Examples</h2>
                    <p className="examples-intro">Here are some popular ways to organize your links with tags:</p>
                    <div className="examples-grid">
                        <div className="example-category">
                            <h4>By Project</h4>
                            <div className="tag-examples">
                                <span className="example-tag" style={{ backgroundColor: '#667eea' }}>Website Redesign</span>
                                <span className="example-tag" style={{ backgroundColor: '#f59e0b' }}>Mobile App</span>
                                <span className="example-tag" style={{ backgroundColor: '#10b981' }}>Marketing Campaign</span>
                            </div>
                        </div>
                        <div className="example-category">
                            <h4>By Topic</h4>
                            <div className="tag-examples">
                                <span className="example-tag" style={{ backgroundColor: '#ef4444' }}>JavaScript</span>
                                <span className="example-tag" style={{ backgroundColor: '#8b5cf6' }}>Design</span>
                                <span className="example-tag" style={{ backgroundColor: '#ec4899' }}>Productivity</span>
                            </div>
                        </div>
                        <div className="example-category">
                            <h4>By Priority</h4>
                            <div className="tag-examples">
                                <span className="example-tag" style={{ backgroundColor: '#06b6d4' }}>Urgent</span>
                                <span className="example-tag" style={{ backgroundColor: '#84cc16' }}>Read Later</span>
                                <span className="example-tag" style={{ backgroundColor: '#f97316' }}>Important</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="tags-cta">
                    <h2>Ready to Get Organized?</h2>
                    <p>Sign in to start creating tags and organizing your links</p>
                    <button className="cta-button">Get Started</button>
                </section>
            </div>
        </div>
    )
}

export default Tags

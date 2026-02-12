import './HomePage.css';

export default function HomePage() {
    return (
        <main className="homepage">
            <section className="hero">
                <h1>🔖 Welcome to LinkTag</h1>
                <p>Save, organize, and manage your links with ease</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
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

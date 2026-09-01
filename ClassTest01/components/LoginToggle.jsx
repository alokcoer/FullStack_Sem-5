import { useState } from 'react';

export default function LoginToggle() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuthStatus = () => setIsAuthenticated((prev) => !prev);

    return (
        <section className="component-container">
            <h2>Authentication</h2>
            {isAuthenticated ? (
                <div className="auth-panel">
                    <p className="status-text">Welcome back. Secure session active.</p>
                    <button onClick={toggleAuthStatus} className="secondary-btn">
                        Logout
                    </button>
                </div>
            ) : (
                <div className="auth-panel">
                    <p className="status-text">Unauthenticated connection.</p>
                    <button onClick={toggleAuthStatus}>
                        Login
                    </button>
                </div>
            )}
        </section>
    );
}